import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import {
    ChevronDownIcon,
    FunnelIcon,
    MinusIcon,
    PlusIcon,
    Squares2X2Icon,
} from "@heroicons/react/20/solid";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Fragment, useState, useEffect } from "react";
import { Inertia } from "@inertiajs/inertia";
import ProductCard from "./ProductCard";
import Pagination from "../../ProductCategories/components/Pagination";
import { useForm, usePage } from "@inertiajs/inertia-react";
import InputLabel from "@/Components/Form/InputLabel";
import InputError from "@/Components/Form/InputError";
import { usePrevious } from "react-use";
import pickBy from "lodash/pickBy";

const sortOptions = [
    {
        name: "Price low to high",
        order: "product_price",
        sort: "asc",
        active: false,
    },
    {
        name: "Price high to low",
        order: "product_price",
        sort: "desc",
        active: false,
    },
    {
        name: "Newest",
        order: "created_at",
        sort: "desc",
        active: false,
    },
    {
        name: "Oldest",
        order: "created_at",
        sort: "asc",
        active: false,
    },
    {
        name: "Discount size",
        order: "",
        sort: "",
        active: false,
    },
    ,
    {
        name: "Best rating",
        order: "",
        sort: "",
        current: false,
    },
];

export default function ProductsList({
    productCategory,
    products,
    acceptedFilters,
    siblingCategories,
}) {
    const [queries, setQueries] = useState({
        order: acceptedFilters.order || "",
        sort: acceptedFilters.sort || "",
        search: acceptedFilters.search || "",
    });

    const [activeSort, setActiveSort] = useState(null);
    const prevValues = usePrevious(queries);
    useEffect(() => {
        if (prevValues) {
            Inertia.get(
                route(route().current(), [productCategory]),
                pickBy(queries),
                {
                    replace: true,
                    preserveState: true,
                }
            );
        }
    }, [queries]);

    const onHandleChange = (event) => {
        setQueries((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value,
        }));
    };

    return (
        <div className="bg-white">
            <div>
                <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                            {productCategory.category_name}
                        </h1>

                        <div className="flex items-center">
                            <button
                                type="button"
                                className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
                            >
                                <span className="sr-only">View grid</span>
                                <Squares2X2Icon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                />
                            </button>
                            <button
                                type="button"
                                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                                onClick={() => setMobileFiltersOpen(true)}
                            >
                                <span className="sr-only">Filters</span>
                                <FunnelIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                />
                            </button>
                        </div>
                    </div>

                    <section
                        aria-labelledby="products-heading"
                        className="pt-6 pb-24"
                    >
                        <h2 id="products-heading" className="sr-only">
                            Products
                        </h2>

                        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                            {/* search  */}
                            <form className="hidden lg:block">
                                <InputLabel
                                    forInput="search"
                                    value="Search product"
                                />

                                <input
                                    type="text"
                                    value={queries.search}
                                    name="search"
                                    // onChange={(e) =>
                                    //     setData("search", e.target.value)
                                    // }
                                    onChange={onHandleChange}
                                    className={`mt-5 w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm `}
                                />

                                <InputError message="" className="mt-10" />
                                <h3 className="sr-only">Categories</h3>
                                <ul
                                    role="list"
                                    className="divide-y space-y-8 text-left border-b pt-10 border-gray-200 pb-10 text-sm font-medium text-gray-900"
                                >
                                    {siblingCategories.map(
                                        (category, index) => (
                                            <li
                                                className="pt-5 text-gray-800 font-bold hover:text-indigo-200 "
                                                key={index}
                                            >
                                                <a
                                                    href={route(
                                                        "categories.show",
                                                        [category]
                                                    )}
                                                >
                                                    {category.category_name}
                                                </a>
                                            </li>
                                        )
                                    )}
                                </ul>
                            </form>

                            {/* Product grid */}
                            <div className="lg:col-span-3">
                                <section>
                                    <div className="grid grid-cols-4 gap-4 lg:grid-cols-3 lg:items-start">
                                        <div className="lg:col-span-3 sm:col-span-2">
                                            <div className="flex items-center justify-between">
                                                <p className="text-sm text-gray-500">
                                                    <span className="hidden sm:inline">
                                                        {" "}
                                                        Showing{" "}
                                                    </span>
                                                    <span className="font-bold">
                                                        {" "}
                                                        {products.to} of{" "}
                                                        {products.total}
                                                    </span>{" "}
                                                    products
                                                </p>

                                                <div className="ml-4">
                                                    <Menu
                                                        as="div"
                                                        className="relative inline-block text-left"
                                                    >
                                                        <div>
                                                            <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                                                                Sort
                                                                <ChevronDownIcon
                                                                    className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                                                    aria-hidden="true"
                                                                />
                                                            </Menu.Button>
                                                        </div>

                                                        <Transition
                                                            as={Fragment}
                                                            enter="transition ease-out duration-100"
                                                            enterFrom="transform opacity-0 scale-95"
                                                            enterTo="transform opacity-100 scale-100"
                                                            leave="transition ease-in duration-75"
                                                            leaveFrom="transform opacity-100 scale-100"
                                                            leaveTo="transform opacity-0 scale-95"
                                                        >
                                                            <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                                <div className="py-1">
                                                                    {sortOptions.map(
                                                                        (
                                                                            option,
                                                                            index
                                                                        ) => (
                                                                            <Menu.Item
                                                                                key={
                                                                                    option.name
                                                                                }
                                                                            >
                                                                                <a
                                                                                    onClick={() => {
                                                                                        setActiveSort(
                                                                                            index
                                                                                        );
                                                                                        setQueries(
                                                                                            (
                                                                                                prevData
                                                                                            ) => ({
                                                                                                ...prevData,
                                                                                                order: option.order,
                                                                                                sort: option.sort,
                                                                                            })
                                                                                        );
                                                                                    }}
                                                                                    className={`
                                                                                        ${
                                                                                            activeSort ==
                                                                                            index
                                                                                                ? "bg-indigo-50"
                                                                                                : ""
                                                                                        }
                                                                                        block px-4 py-2 text-sm hover:bg-indigo-200 cursor-pointer
                                                                                        `}
                                                                                >
                                                                                    {
                                                                                        option.name
                                                                                    }
                                                                                </a>
                                                                            </Menu.Item>
                                                                        )
                                                                    )}
                                                                </div>
                                                            </Menu.Items>
                                                        </Transition>
                                                    </Menu>
                                                </div>
                                            </div>

                                            {/* list */}
                                            <div className="mt-4 grid grid-cols-1 gap-px border border-gray-200 bg-gray-200 sm:grid-cols-2 lg:grid-cols-3">
                                                {products.data.map(
                                                    (product, index) => (
                                                        <ProductCard
                                                            key={index}
                                                            product={product}
                                                        />
                                                    )
                                                )}
                                            </div>
                                            <Pagination
                                                links={products.links}
                                            />
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
}
