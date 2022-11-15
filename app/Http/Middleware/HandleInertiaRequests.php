<?php

namespace App\Http\Middleware;

use App\Http\Resources\UserResource;
use App\Models\Cart;
use App\Models\ProductCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    public function version(Request $request)
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function share(Request $request)
    {

        return array_merge(parent::share($request), [
            'auth' => [
                'user' => Auth::user() ? new UserResource(Auth::user()) : null,

            ],

            'categories' => ProductCategory::with('categories')->where('product_category_id', '=', null)->get()->map(function ($category) {
                return [
                    'id' => $category->id,
                    'category_name' => $category->category_name,
                    'category_code' => $category->category_code,
                    'subcategories' => $category->categories,

                ];
            }),

            'cartItemNr' => Auth::user() ? Auth::user()->cart()->withCount('cartItems')->first()->cart_items_count : null,
            'cartTotal' => Auth::user() ? Auth::user()->cart->totalCalculation() : null,
            'cartProducts' => Auth::user() ? Auth::user()->cartItems->map(function ($product) {
                return [
                    'id' => $product->id,
                    'quantity' => $product->quantity,
                    'product' => $product->product,
                    'available_quantity' => $product->product->stock->available_quantity,

                ];
            }) : null,

            'ziggy' => function () use ($request) {
                return array_merge((new Ziggy)->toArray(), [
                    'location' => $request->url(),
                ]);
            },
        ]);
    }
}
