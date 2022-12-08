<?php

namespace Database\Seeders;

use App\Models\ProductCategory;
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


        foreach ($categoriesData->productCategories as $productCategory) {

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
                            'image_path' => secure_asset($subCategory->image_path),
                        ])
                    );
                }
            }
        }
    }
}
