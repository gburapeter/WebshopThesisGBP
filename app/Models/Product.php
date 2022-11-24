<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Request;

class Product extends Model
{
    use HasFactory;


    public function scopeM1($query)
    {
        return $query->where('product_name', 'LIKE', '%' . 'M1' . '%');
    }

    public function scopeOrdering($query)
    {
        $query->when(Request::input('order'), function ($query, $orderField) {

            $order = Request::input('sort') == 'asc' ? 'asc' : 'desc';
            $query->orderBy($orderField, $order);
        });
    }

    // Initial:

    // ->when(Request::input('order'), function ($query, $orderField) {

    //     $order = Request::input('sort') == 'asc' ? 'asc' : 'desc';
    //     $query->orderBy($orderField, $order);
    // })



    public function scopeFilter($query, array $filters)
    {
        $query->when($filters['search'] ?? null, function ($query, $search) {
            $query->where('product_name', 'like', '%' . $search . '%');
        });
        // ->when($filters['trashed'] ?? null, function ($query, $trashed) {
        //     if ($trashed === 'with') {
        //         $query->withTrashed();
        //     } elseif ($trashed === 'only') {
        //         $query->onlyTrashed();
        //     }
        // });
    }

    public function category()
    {
        return $this->belongsTo(ProductCategory::class, 'product_category_id');
    }

    public function cartItems()
    {
        return $this->hasMany(CartItem::class);
    }

    public function stock()
    {
        return $this->hasOne(ProductStock::class);
    }

    public function orderItem()
    {
        return $this->hasOne(OrderItem::class);
    }
}
