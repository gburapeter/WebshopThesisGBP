<?php

namespace Database\Seeders;

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

        $statuses = [
            ['Pending', 'The order is currently pending'],
            ['Accepted', 'The order payment was succesfull'],
            ['Closed', 'The order was delivered and put into archive']
        ];
        foreach ($statuses as $status) {
            DB::table('order_status_codes')->insert([
                'name' => $status[0],
                'description' => $status[1],

            ]);
        }
    }
}
