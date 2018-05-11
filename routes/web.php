<?php

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

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
Route::get('/api/movimientos',"APIController@getMovimientos")->name('movimientos');
Route::get('/api/vehiculos',"APIController@getVehiculos")->name('vehiculos');
Route::get('/api/tarifas',"APIController@getTarifas")->name('tarifas');
Route::post('/api/addMovimientos',"APIController@addMovimientos")->name('movimientos');
Route::post('/api/outMovimientos',"APIController@outMovimiento")->name('movimientos');

