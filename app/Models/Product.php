<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;


    public function scopeM1($query)
    {
        return $query->where('product_name', 'LIKE', '%' . 'M1' . '%');
    }

    public function category()
    {
        return $this->belongsTo(ProductCategory::class);
    }
}
