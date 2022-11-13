<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class CheckoutController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        return Inertia::render(
            'Checkout/Index',

            Auth::user() ? ['address' => Auth::user()->address
                ->only('id', 'street_name', 'street_number', 'suite', 'country', 'city', 'state', 'postal_code')] : null
        );
    }
}
