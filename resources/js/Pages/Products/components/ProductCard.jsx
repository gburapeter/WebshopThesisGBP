import { Square2StackIcon } from "@heroicons/react/20/solid";
import { useForm } from "@inertiajs/inertia-react";
import React from "react";

const ProductCard = ({ product }) => {
    const { data, setData, post, processing, errors } = useForm({
        id: product.id,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("cartitems.store"));
    };
    return (
        <div className="border hover:border-indigo-300 bg-white">
            <a
                href={route("products.show", [product])}
                className=" relative block bg-white"
            >
                <button
                    onClick={() => {
                        e.preventDefault();
                        alert("asd");
                    }}
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
                    src={product.image_path + "/Main.jpg"}
                    className="h-56 w-full object-contain lg:h-72 "
                />
            </a>
            <div className="p-6">
                <span className="inline-block bg-yellow-400 border text-black px-3 py-1 text-xs font-bold">
                    New
                </span>

                <h3 className="mt-4 text-lg font-bold">
                    {product.product_name}
                </h3>

                <p className="mt-2 text-sm font-medium text-gray-600">
                    ${product.product_price}
                </p>

                <a
                    onClick={submit}
                    className="mt-4 cursor-pointer flex w-full items-center justify-center rounded-sm bg-indigo-100
                    hover:bg-indigo-200 px-8 py-4"
                >
                    <span className="text-sm font-bold"> Add to Cart </span>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 ml-2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                        />
                    </svg>
                </a>
            </div>
        </div>
    );
};

export default ProductCard;
