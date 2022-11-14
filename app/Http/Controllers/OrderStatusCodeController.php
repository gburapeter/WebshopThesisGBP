<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreOrderStatusCodeRequest;
use App\Http\Requests\UpdateOrderStatusCodeRequest;
use App\Models\OrderStatusCode;

class OrderStatusCodeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
     * @param  \App\Http\Requests\StoreOrderStatusCodeRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreOrderStatusCodeRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\OrderStatusCode  $orderStatusCode
     * @return \Illuminate\Http\Response
     */
    public function show(OrderStatusCode $orderStatusCode)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\OrderStatusCode  $orderStatusCode
     * @return \Illuminate\Http\Response
     */
    public function edit(OrderStatusCode $orderStatusCode)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateOrderStatusCodeRequest  $request
     * @param  \App\Models\OrderStatusCode  $orderStatusCode
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateOrderStatusCodeRequest $request, OrderStatusCode $orderStatusCode)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\OrderStatusCode  $orderStatusCode
     * @return \Illuminate\Http\Response
     */
    public function destroy(OrderStatusCode $orderStatusCode)
    {
        //
    }
}
