import React from "react";

const NewestProductCard = ({ product }) => {
    return (
        <>
            <a href={route("products.show", [product])} className="group">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-white xl:aspect-w-7 xl:aspect-h-8">
                    <img
                        src={product.image_path + "/Main.jpg"}
                        alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                        className="h-56 w-full object-contain object-center lg:h-56 sm:h-2/3 transition-transform duration-500 group-hover:scale-105 "
                    />
                </div>
                <h3 className="mt-4 text-sm font-bold text-black hover:text-indigo-500">
                    {product.product_name}
                </h3>
                <p className="mt-1 text-lg font-medium text-gray-900">
                    ${product.product_price}
                </p>
            </a>
        </>
    );
};

export default NewestProductCard;
