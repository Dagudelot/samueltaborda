<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Psicólogo online | Blog de psicología | Psicólogo en Medellín"/>

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Logo -->
    <link rel="icon" href="{{ asset('images/Samuel Taborda Icon.png') }}">

    <!-- Twitter Script -->
    <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

    <!-- Styles -->
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    <link rel="stylesheet" href="{{ asset('css/landing_pages/app.css') }}">

    <!-- Applause Button -->
    <link rel="stylesheet" href="https://unpkg.com/applause-button/dist/applause-button.css">
    <script src="https://unpkg.com/applause-button/dist/applause-button.js"></script>

    @if(config('app.env') == 'production' )
    <!-- Global site tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-151183483-5"></script>
        <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-151183483-5');
        </script>
    @endif

</head>
<body>

    <div id="app">
        <v-app>
            <v-container>
                <app></app>
            </v-container>
        </v-app>
    </div>
    
    <!-- Scripts -->
    @yield('scripts')
    <script src="{{ asset('js/clients/app.js') }}"></script>
    <script src="{{ asset('js/landing_pages/instagram.js') }}"></script>
    <script src="{{ asset('js/landing_pages/services.js') }}"></script>
    <!-- /Scripts -->
</body>
</html>