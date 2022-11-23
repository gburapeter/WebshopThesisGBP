<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'total_price',
        'description',
        'user_id',
        'order_status_code_id',
        'reference_number'

    ];

    public function orderItems()
    {
        return $this->hasMany(OrderItem::class);
    }



    public function orderStatusCode()
    {
        return $this->belongsTo(OrderStatusCode::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
