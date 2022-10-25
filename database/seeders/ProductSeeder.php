<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $productsJSON = file_get_contents(base_path('resources/js/Data/SeederData/Products.json'));
        $productData = json_decode($productsJSON);


        foreach ($productData->products as $product) {

            Product::create([
                'product_name' => $product->product_name,
                'product_price' => $product->product_price,
                'sku' => $product->sku,
                'description' => $product->description,
                'image_path' => $product->image_path,
                'product_category_id' => $product->product_category_id
            ]);
        }
    }
}
