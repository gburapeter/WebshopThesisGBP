<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreOrderRequest;
use App\Http\Requests\UpdateOrderRequest;
use App\Models\Address;
use App\Models\Order;
use App\Models\OrderStatusCode;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Str;
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
            'order_status_code_id' => OrderStatusCode::find(2)->id,

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

        $address = $request->id != null
            ? Address::find($request->id)
            : Address::create(
                $request->validate([
                    'firstname' => 'required|string|max:255',
                    'lastname' => 'required|string|max:255',
                    'email' => 'required|string|email|max:255|unique:users',
                    'phone' => 'required',
                    'country' => 'required',
                    'street_name' => 'required',
                    'street_number' => 'required|numeric',
                    'suite' => 'required',
                    'city' => 'required',
                    'state' => 'required',
                    'postal_code' => 'required',
                ])
            );


        $address->shipments()->create([
            'shipment_tracking_nr' => Str::upper(Str::random(7)),
            'shipment_date' => Carbon::now()->addDays(4)->format('Y-m-d'),
            'order_id' => 1,
            'shipment_status_id' => 1,
        ]);

        return Redirect::route('home');
    }




    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function show(Order $order)
    {
        dd($order->id);
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
