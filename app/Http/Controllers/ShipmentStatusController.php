<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreShipmentStatusRequest;
use App\Http\Requests\UpdateShipmentStatusRequest;
use App\Models\ShipmentStatus;

class ShipmentStatusController extends Controller
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
     * @param  \App\Http\Requests\StoreShipmentStatusRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreShipmentStatusRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ShipmentStatus  $shipmentStatus
     * @return \Illuminate\Http\Response
     */
    public function show(ShipmentStatus $shipmentStatus)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\ShipmentStatus  $shipmentStatus
     * @return \Illuminate\Http\Response
     */
    public function edit(ShipmentStatus $shipmentStatus)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateShipmentStatusRequest  $request
     * @param  \App\Models\ShipmentStatus  $shipmentStatus
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateShipmentStatusRequest $request, ShipmentStatus $shipmentStatus)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ShipmentStatus  $shipmentStatus
     * @return \Illuminate\Http\Response
     */
    public function destroy(ShipmentStatus $shipmentStatus)
    {
        //
    }
}
