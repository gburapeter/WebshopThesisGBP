<?php

namespace Database\Seeders;

use App\Enums\OrderStatusCode;
use App\Models\Order;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class OrderStatusCodeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {



        foreach (OrderStatusCode::getKeys() as $status) {
            DB::table('order_status_codes')->insert([
                'name' => $status,


            ]);
        }
    }
}
