<?php

namespace Database\Seeders;

use App\Models\Address;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $address = Address::create([
            'country' => 'Denmark',
            'street_name' => 'Elmelundsvej',
            'street_number' =>  4,
            'suite' => 1,
            'city' => 'Odense',
            'state' => 'Frey',
            'postal_code' => '5200'
        ]);
        $user = User::create([
            'name' => 'Bura Peter',
            'email' => 'gburapeti@gmail.com',
            'password' => Hash::make('admin'),
            'phone' => '36204093598',
            'address_id' => $address->id,
        ]);
    }
}
