import React from "react";

export const ProductMedia = ({ myProduct }) => {
    return (
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
            <div className="aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
                <img
                    src={myProduct.image_path + "/1.jpg"}
                    alt={myProduct.product_name}
                    className="h-full w-full object-cover object-center"
                />
            </div>
            <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
                    <img
                        src={myProduct.image_path + "/2.jpg"}
                        alt={myProduct.product_name}
                        className="h-full w-full object-cover object-center"
                    />
                </div>
                <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
                    <img
                        src={myProduct.image_path + "/3.jpg"}
                        alt={myProduct.product_name}
                        className="h-full w-full object-cover object-center"
                    />
                </div>
            </div>
            <div className="aspect-w-4 aspect-h-5 sm:overflow-hidden sm:rounded-lg lg:aspect-w-3 lg:aspect-h-4">
                <img
                    src={myProduct.image_path + "/4.jpg"}
                    alt={myProduct.product_name}
                    className="h-full w-full object-cover object-center"
                />
            </div>
        </div>
    );
};
