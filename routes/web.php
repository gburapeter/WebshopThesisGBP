<?php

use Illuminate\Support\Facades\URL;



use App\Http\Controllers\CartController;
use App\Http\Controllers\CartItemController;
use App\Http\Controllers\CheckoutController;
use App\Http\Controllers\NotificationController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\PaypalController;
use App\Http\Controllers\ProductCategoryController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ShipmentController;
use App\Models\Product;
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


// HOMEPAGE
Route::get('/', function () {
    return Inertia::render('Home/Homepage', [
        'newestProducts' => Product::inRandomOrder()->limit(4)->get(),
    ]);
})->name('home');

//PRODUCT CATEGORIES
Route::resource('categories', ProductCategoryController::class)
    ->parameters([
        'categories' => 'product_category'
    ]);

//PRODIUCTS
Route::resource('products', ProductController::class);


//SIGNED IN ROUTES
Route::middleware(['auth', 'verified'])->group(function () {


    Route::resource('cartitems', CartItemController::class);

    Route::resource('carts', CartController::class);

    Route::resource('orders', OrderController::class);

    Route::resource('shipments', ShipmentController::class);

    Route::get('checkout', [CheckoutController::class, 'index'])
        ->name('checkout');

    Route::delete('delete/{notification}', [NotificationController::class, 'delete'])->name('notifications.delete');
});

require __DIR__ . '/auth.php';
