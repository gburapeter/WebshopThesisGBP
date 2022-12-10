<!DOCTYPE html>
<html class="" data-theme="emerald" lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title inertia>{{ config('app.name', 'Laravel') }}</title>

    <!-- Fonts -->

    {{-- <link rel="stylesheet" href="https://unpkg.com/flowbite@1.5.3/dist/flowbite.min.css" /> --}}
    <!-- Scripts -->
    <script src="https://unpkg.com/flowbite@1.5.3/dist/flowbite.js"></script>

    @production
        {{-- @php
            $manifest = json_decode(file_get_contents(public_path('build/manifest.json')));
        @endphp
        <script type="module" src="/build/{$manifest['resources/js/app.jsx']['file']}"></script>
        <link rel="stylesheet" href="/build/{$manifest['resources/js/app.jsx']['css'][0]}" />

    @else
        {{-- <script type="module" src="http://localhost:3000/@vite/client"></script>
        <script type="module" src="http://localhost:3000/resources/js/app.js"></script> --}}
        <?php echo app('Tightenco\Ziggy\BladeRouteGenerator')->generate(); ?>
        @viteReactRefresh
        @vite('resources/js/app.jsx')
        @inertiaHead
    @endproduction

</head>

<body class="font-sans antialiased">
    @inertia
</body>

</html>
