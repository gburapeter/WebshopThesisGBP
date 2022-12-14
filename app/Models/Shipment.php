<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Shipment extends Model
{
    use HasFactory;


    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'address_id',
        'shipment_tracking_nr',
        'shipment_date',
        'order_id',
        'shipment_status_id'
    ];


    public function address()
    {
        return $this->belongsTo(Address::class);
    }
}
