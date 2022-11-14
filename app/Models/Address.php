<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    use HasFactory;



    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'country',
        'street_name',
        'street_number',
        'suite',
        'city',
        'state',
        'postal_code'
    ];

    public function users()
    {
        return $this->hasMany(User::class);
    }

    public function shipments()
    {
        return $this->hasMany(Shipment::class);
    }
}
