<?php

use App\Http\Controllers\CartController;
use App\Http\Controllers\CartItemController;
use App\Http\Controllers\CheckoutController;
use App\Http\Controllers\ProductCategoryController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ShipmentController;

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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
    return Inertia::render('Home/Example', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})
    // ->middleware(['auth', 'verified'])
    ->name('home');

Route::resource('categories', ProductCategoryController::class)
    ->parameters([
        'categories' => 'product_category'
    ]);

Route::resource('products', ProductController::class)->middleware(['auth', 'verified']);

Route::resource('cartitems', CartItemController::class)->middleware(['auth', 'verified']);

Route::resource('carts', CartController::class)->middleware(['auth', 'verified']);



Route::resource('shipments', ShipmentController::class)->middleware(['auth', 'verified']);


// Route::get('/checkout', function () {
//     return Inertia::render('Checkout/Index');
// })->middleware(['auth', 'verified'])->name('checkout');


Route::get('checkout', [CheckoutController::class, 'index'])
    ->name('checkout');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/simple', function () {
    return Inertia::render('Simple');
})->name('simple');
require __DIR__ . '/auth.php';
