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

    <!-- Styles -->
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    <link rel="stylesheet" href="{{ asset('css/landing_pages/app.css') }}">

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
    <script src="{{ asset('js/app.js') }}"></script>
    <!-- /Scripts -->
</body>
</html>