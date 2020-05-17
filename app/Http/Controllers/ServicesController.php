<?php

namespace App\Http\Controllers;

use App\Service;
use Illuminate\Http\Request;

class ServicesController extends Controller
{

    public function getServices()
    {
        return response()->json([ 'services' => Service::all() ]);
    }

}
