<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $productCategoriesJSON = file_get_contents(base_path('resources/js/Data/SeederData/ProductCategories.json'));
        $categoriesData = json_decode($productCategoriesJSON);

        dd($categoriesData[0]->productCategories);
        foreach ($categoriesData[0]->productCategories as $productCategory) {
            DB::table('product_categories')->insert([
                'category_name' => $productCategory->category_name,
                'category_code' => $productCategory->category_code,
                'category_description' => $productCategory->category_description,
            ]);
        }
    }
}
