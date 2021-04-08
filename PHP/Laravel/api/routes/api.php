<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
//use App\Models\Breed;
use App\Http\Controllers\BreedController;
use App\Http\Controllers\AuthController;

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

/*Route::get('/breeds', function(){
    return Breed::all();
});*/

/*Route::post('/breeds', function(){
    return Breed::create([
        'breed_name' => 'Breed 1',
        'info' => 'Info 1'
    ]);
});*/

//Route::get('/breeds', [BreedController::class, 'index']);

//Route::post('/breeds', [BreedController::class, 'store']);

// send all requests to breeds to breeds controller
//Route::resource('breeds', BreedController::class);

//Route::get('/breeds/search/{breedName}', [BreedController::class, 'search']);

// public routes
Route::get('/breeds', [BreedController::class, 'index']);
Route::get('/breeds/{id}', [BreedController::class, 'show']);
Route::get('/breeds/search/{breedName}', [BreedController::class, 'search']);

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

// protected routes
Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::post('/breeds', [BreedController::class, 'store']);
    Route::put('/breeds/{id}', [BreedController::class, 'update']);
    Route::delete('/breeds/{id}', [BreedController::class, 'destroy']);

    Route::post('/logout', [AuthController::class, 'logout']);
});