<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function(){
    // This validation will be used to auth users in Quotations App
    if( isset($_GET['code']) ){
        $code = $_GET['code'];
        $appUrl = "http://ec2-174-129-166-9.compute-1.amazonaws.com/";
        header("location:".$appUrl."?code=".$code);
        die();
    }else {
        return view('client_pages.home');
    }
});

Auth::routes();

Route::get('/admin', 'HomeController@index')->name('home');

Route::prefix('test')->group(function () {
    Route::get('/{slug?}', 'TestsController@getTests');
    Route::post('save', 'TestsController@save');
});

Route::get('settings', 'SettingsController@getSettings');

Route::namespace('Studio')->prefix(config('studio.path'))->group(function () {
    Route::prefix('api')->group(function () {
        Route::prefix('posts')->group(function () {
            Route::get('/', 'PostController@getMostViewedPosts');
            Route::get('/{limit}', 'PostController@index');
            Route::get('{identifier}/{slug}', 'PostController@show')->middleware('Canvas\Http\Middleware\Session');
        });

        Route::prefix('tags')->group(function () {
            Route::get('/', 'TagController@index');
            Route::get('{slug}', 'TagController@show');
        });

        Route::prefix('topics')->group(function () {
            Route::get('/', 'TopicController@index');
            Route::get('{slug}', 'TopicController@show');
        });

        Route::prefix('users')->group(function () {
            Route::get('{identifier}', 'UserController@show');
        });

        Route::get('search/{payload}', 'PostController@search');
    });

    Route::get('/{view?}', 'ViewController')->where('view', '(.*)')->name('studio');
});
