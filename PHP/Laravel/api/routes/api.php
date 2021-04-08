<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Breed;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/breeds', function(){
    return Breed::all();
});

Route::post('/breeds', function(){
    return Breed::create([
        'breed_name' => 'Breed 1',
        'info' => 'Info 1'
    ]);
});