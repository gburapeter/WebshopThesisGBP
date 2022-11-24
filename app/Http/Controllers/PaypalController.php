<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Srmklive\PayPal\Services\PayPal as PayPalClient;

class PaypalController extends Controller
{
    public function create(Request $request)
    {
        $data = json_decode($request->getContent(), true);
        $provider = new PayPalClient;

        // Through facade. No need to import namespaces
        $provider = \Srmklive\PayPal\Facades\PayPal::setProvider();

        $provider->setApiCredentials(config('paypal'));

        $token = $provider->getAccessToken();

        $provider->setAccessToken($token);

        $price = $data['total_price'];

        $data = [
            "intent" => "CAPTURE",
            "purchase_units" => [
                [
                    "amount" => [
                        "currency_code" => "USD",
                        "value" => $price
                    ]
                ]
            ]
        ];

        $order = $provider->createOrder($data);

        return response()->json($order);
    }

    public function capture(Request $request)
    {
        $data = json_decode($request->getContent(), true);

        $order_id = $data['orderId'];

        // Through facade. No need to import namespaces
        $provider = \Srmklive\PayPal\Facades\PayPal::setProvider();

        $provider->setApiCredentials(config('paypal'));

        $token = $provider->getAccessToken();

        $provider->setAccessToken($token);

        $order = $provider->capturePaymentOrder($order_id);


        return response()->json($order);
    }
}
