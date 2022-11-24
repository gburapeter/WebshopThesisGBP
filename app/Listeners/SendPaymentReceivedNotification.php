<?php

namespace App\Listeners;

use App\Events\PaymentProcessed;
use App\Notifications\OrderPaid;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class SendPaymentReceivedNotification
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  \App\Events\PaymentProcessed  $event
     * @return void
     */
    public function handle(PaymentProcessed $event)
    {
        //
        $event->order->user->notify(new OrderPaid($event->order));
    }
}
