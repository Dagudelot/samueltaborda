<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Logo -->
    <link rel="icon" href="{{ asset('images/Samuel Taborda Icon.png') }}">

    <!-- Styles -->
    <link rel="stylesheet" href="{{ asset('css/landing_pages/app.css') }}">

    <!-- Applause Button -->
    <link rel="stylesheet" href="https://unpkg.com/applause-button/dist/applause-button.css">
    <script src="https://unpkg.com/applause-button/dist/applause-button.js"></script>
</head>
<body>

    <div id="app">
        <app></app>
    </div>
    
    <!-- Scripts -->
    @yield('scripts')
    <script src="{{ asset('js/app.js') }}"></script>
    <script src="{{ asset('js/landing_pages/instagram.js') }}"></script>
    <script src="{{ asset('js/landing_pages/services.js') }}"></script>
    <script src="{{ asset('js/landing_pages/parallax.js') }}"></script>
    <!-- /Scripts -->
</body>
</html>