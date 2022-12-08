<!DOCTYPE html>
<html class="" data-theme="emerald" lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title inertia>{{ config('app.name', 'Laravel') }}</title>

    <!-- Fonts -->

    {{-- <link rel="stylesheet" href="https://unpkg.com/flowbite@1.5.3/dist/flowbite.min.css" /> --}}
    <!-- Scripts -->
    {{-- <script src="https://unpkg.com/flowbite@1.5.3/dist/flowbite.js"></script> --}}
    @routes()
    @viteReactRefresh
    @vite('resources/js/app.jsx')
    @inertiaHead
</head>

<body class="font-sans antialiased">
    @inertia
</body>

</html>
