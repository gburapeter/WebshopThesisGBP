<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Product;
use App\Models\ProductCategory;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {

        $productCategoriesJSON = file_get_contents(base_path('resources/js/Data/SeederData/ProductCategories.json'));
        $categoriesData = json_decode($productCategoriesJSON);

        // dd($categoriesData[0]->productCategories);
        foreach ($categoriesData->productCategories as $productCategory) {
            // DB::table('product_categories')->insert([
            //     'category_name' => $productCategory->category_name,
            //     'category_code' => $productCategory->category_code,
            //     'category_description' => $productCategory->category_description,
            // ]);
            $category = ProductCategory::create([
                'category_name' => $productCategory->category_name,
                'category_code' => $productCategory->category_code,
                'category_description' => $productCategory->category_description,
            ]);
            if ($productCategory->subcategories) {
                foreach ($productCategory->subcategories as $subCategory) {
                    $category->categories()->save(
                        ProductCategory::create([
                            'category_name' => $subCategory->category_name,
                            'category_code' => $subCategory->category_code,
                            'category_description' => $subCategory->category_description,
                            'image_path' => $subCategory->image_path,
                        ])
                    );
                }
            }
        }
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}
