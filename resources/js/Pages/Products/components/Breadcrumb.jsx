import React from "react";

const Breadcrumb = ({ category, myProduct }) => {
    return (
        <nav aria-label="Breadcrumb">
            <ol
                role="list"
                className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
            >
                <li>
                    <div className="flex items-center">
                        <a
                            href={route("categories.show", [category])}
                            className="mr-2 text-sm font-bold text-black hover:text-indigo-800"
                        >
                            {category.category_name}
                        </a>
                        <svg
                            width={16}
                            height={20}
                            viewBox="0 0 16 20"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            className="h-5 w-4 text-gray-300"
                        >
                            <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                        </svg>
                    </div>
                </li>

                <li className="text-sm">
                    <a
                        href={route("products.show", [myProduct])}
                        aria-current="page"
                        className="font-bold text-black hover:text-indigo-800"
                    >
                        {myProduct.product_name}
                    </a>
                </li>
            </ol>
        </nav>
    );
};

export default Breadcrumb;
