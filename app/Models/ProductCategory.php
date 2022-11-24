<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductCategory extends Model
{
    use HasFactory;


    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'category_name',
        'category_code',
        'category_description',
        'parent_category_id',

    ];

    public function products()
    {
        return $this->hasMany(Product::class);
    }

    public function categories()
    {
        return $this->hasMany(ProductCategory::class);
    }

    public function parentCategory()
    {
        return $this->belongsTo(ProductCategory::class, 'product_category_id');
    }
}
