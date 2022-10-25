import React from "react";

const ProductCard = ({ product }) => {
    return (
        <div>
            <a
                href={route("products.show", [product])}
                className="hover:border hover:border-blue-300 relative block bg-white"
            >
                <button
                    type="button"
                    className="absolute right-4 top-4 rounded-full bg-black p-2 text-white"
                >
                    <span className="sr-only">Wishlist</span>
                    <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        ></path>
                    </svg>
                </button>

                <img
                    alt="Toy"
                    src={product.image_path}
                    className="h-56 w-full object-contain lg:h-72"
                />

                <div className="p-6">
                    <span className="inline-block bg-secondary px-3 py-1 text-xs font-medium">
                        New
                    </span>

                    <h3 className="mt-4 text-lg font-bold">
                        {product.product_name}
                    </h3>

                    <p className="mt-2 text-sm font-medium text-gray-600">
                        ${product.product_price}
                    </p>

                    <button
                        type="button"
                        className="mt-4 flex w-full items-center justify-center rounded-sm bg-gradient-to-r from-sky-100 to-green-200 px-8 py-4"
                    >
                        <span className="text-sm font-medium">
                            {" "}
                            Add to Cart{" "}
                        </span>

                        <svg
                            className="ml-1.5 h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                            />
                        </svg>
                    </button>
                </div>
            </a>
        </div>
    );
};

export default ProductCard;
