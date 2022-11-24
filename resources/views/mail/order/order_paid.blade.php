@component('mail::message')
# Order succesfull

We are happy to inform you that your order with number <span class="text-indigo-300">#{{ $order->reference_number }}</span> was successful.

@component('mail::button', ['url' => $url])
Order tracking
@endcomponent

Thanks,<br>
Webshop
@endcomponent
