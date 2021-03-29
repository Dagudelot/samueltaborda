<?php

namespace App\Http\Controllers;

use App\Settings;
use Illuminate\Http\Request;

class SettingsController extends Controller
{
    public function getSettings(){

        return response()->json([
            'settings' =>  Settings::select([ 'name', 'value' ])->get()
        ]);
    }
}
