<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ShipmentStatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $statuses = [
            ['In process', 'The order is being currently delivered'],
            ['Delivered', 'The order was succesfully delivered']
        ];
        foreach ($statuses as $status) {
            DB::table('shipment_statuses')->insert([
                'name' => $status[0],
                'description' => $status[1],

            ]);
        }
    }
}
