<?php

namespace App\Http\Controllers;

use App\Enums\OrderStatusCode as EnumsOrderStatusCode;
use App\Events\PaymentProcessed;
use App\Http\Requests\StoreOrderRequest;
use App\Http\Requests\UpdateOrderRequest;
use App\Models\Address;
use App\Models\Order;
use App\Models\OrderStatusCode;
use App\Notifications\OrderCreated;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        return Inertia::render(
            'Orders/Index/Index',

            ['orders' => Auth::user() ? Auth::user()->orders->map(function ($order) {
                return [
                    'id' => $order->id,
                    'total_price' => $order->total_price,
                    'reference_number' => $order->reference_number,
                    'username' => Auth::user()->name,
                    'total_items' => $order->orderItems()->count(),
                    'order_status' => $order->orderStatusCode->name,

                ];
            }) : null]

        );
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreOrderRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreOrderRequest $request)
    {

        $user = Auth::user();

        //ORDER
        $order = Order::create([
            'total_price' =>  $user->cart->totalCalculation(),
            'description' => 'No notes',
            'user_id' => $user->id,
            'reference_number' => $request->reference_number,
            'order_status_code_id' => EnumsOrderStatusCode::fromKey($request->status)->value,

        ]);



        //ORDER ITEMS
        foreach ($user->cartItems as $cartItem) {
            $order_items = $order->orderItems()->create([
                'quantity' => $cartItem->quantity,
                'product_id' => $cartItem->product_id,
            ]);
        }

        //DELETE CART
        $user->cartItems()->delete();

        $user->address->fill($request->validate([
            // 'firstname' => 'required|string|max:255',
            // 'lastname' => 'required|string|max:255',
            // 'email' => ['required', 'string', 'email', 'max:255', Rule::unique('users')->ignoreModel($request->user())],
            // 'phone' => 'required',
            'country' => 'required',
            'street_name' => 'required',
            'street_number' => 'required|numeric',
            'suite' => 'required',
            'city' => 'required',
            'state' => 'required',
            'postal_code' => 'required',
        ]))->save();

        $user->address->shipments()->create([
            'shipment_tracking_nr' => Str::upper(Str::random(7)),
            'shipment_date' => Carbon::now()->addDays(4)->format('Y-m-d'),
            'order_id' => $order->id,
            'shipment_status_id' => 1,
        ]);


        $user->notify(new OrderCreated($order));
        PaymentProcessed::dispatch($order);
        return to_route('home');
    }




    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function show(Order $order)
    {
        return Inertia::render(
            'Orders/Show/Show',
            [
                'order' =>
                [
                    'id' => $order->id,
                    'reference_number' => $order->reference_number,
                    'total_price' => $order->total_price,
                    'description' => $order->description,
                    'updated_at' => $order->updated_at->toDateTimeString(),

                ],
                'orderItems' => $order->orderItems->map(function ($order) {
                    return [

                        'quantity' => $order->quantity,
                        'product_name' => $order->product->product_name,
                        'product_price' => $order->product->product_price,
                        'image_path' => $order->product->image_path,


                    ];
                }),

                'user' => $order->user->only('name', 'phone', 'email'),
                'address' => $order->user->address
                    ->only('id', 'street_name', 'street_number', 'suite', 'country', 'city', 'state', 'postal_code')
            ],


        );
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function edit(Order $order)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateOrderRequest  $request
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateOrderRequest $request, Order $order)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function destroy(Order $order)
    {
        //
    }
}
