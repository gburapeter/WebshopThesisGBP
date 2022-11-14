import React from "react";
import { Inertia } from "@inertiajs/inertia";
const CheckoutProduct = ({ item }) => {
    const handleRemoval = (event, cartitem) => {
        event.preventDefault();

        Inertia.delete(route("cartitems.destroy", [cartitem.id]), {
            preserveScroll: true,
        });
    };
    return (
        <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 indicator hover:border-indigo-300 w-full flex flex-col items-center p-6 rounded-lg">
                <div className="w-24 h-20 rounded-full bg-indigo-100 text-indigo-500 mb-2">
                    <img
                        src={item.product.image_path + "/Main.jpg"}
                        alt={item.product.product_name}
                        className="mb-4"
                    />
                </div>
                <a href={route("products.show", [item.product])}>
                    <h2 className="text-lg text-gray-900 hover:text-indigo-500 font-medium title-font mb-2">
                        {item.product.product_name}
                        {/* {product.product.product_name} */}
                    </h2>
                </a>
                <p className="leading-relaxed font-bold ">
                    {item.quantity} pcs
                </p>
                <p className="leading-relaxed text-indigo-500 font-bold">
                    {item.product.product_price}$
                </p>

                <span
                    className="indicator-item cursor-pointer hover:text-blue-300"
                    onClick={(e) => handleRemoval(e, item)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                </span>
            </div>
        </div>
    );
};

export default CheckoutProduct;
