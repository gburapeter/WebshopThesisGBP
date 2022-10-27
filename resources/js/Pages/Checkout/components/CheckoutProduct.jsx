import React from "react";

export const CheckoutProduct = () => {
    return (
        <div class="xl:w-1/3 md:w-1/2 p-4">
            <div class="border border-gray-200 indicator hover:border-indigo-300 w-full flex flex-col items-center p-6 rounded-lg">
                <div class="w-20 h-20 rounded-full bg-indigo-100 text-indigo-500 mb-2">
                    <img
                        src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg"
                        alt="asd"
                        className=" "
                    />
                </div>

                <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
                    Shooting Stars
                </h2>
                <p class="leading-relaxed text-base">999$</p>
                <span className="indicator-item cursor-pointer hover:text-blue-300">
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
