<?php

use App\Http\Controllers\EventController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});
Route::prefix('events')->group(function () {
    Route::post('/', [EventController::class, 'store']);
    Route::get('/', [EventController::class, 'index']);
    Route::get('{event}', [EventController::class, 'show']);
    Route::put('{event}', [EventController::class, 'update']);
    Route::delete('{event}', [EventController::class, 'destroy']);
});
require __DIR__ . '/auth.php';
