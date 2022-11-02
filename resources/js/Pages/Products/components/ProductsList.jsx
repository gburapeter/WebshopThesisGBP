import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import {
    ChevronDownIcon,
    FunnelIcon,
    MinusIcon,
    PlusIcon,
    Squares2X2Icon,
} from "@heroicons/react/20/solid";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Fragment, useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import ProductCard from "./ProductCard";
import Pagination from "../../ProductCategories/components/Pagination";
import { usePage } from "@inertiajs/inertia-react";
import InputLabel from "@/Components/Form/InputLabel";
import InputError from "@/Components/Form/InputError";

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

const subCategories = [
    { name: "Totes", href: "#" },
    { name: "Backpacks", href: "#" },
    { name: "Travel Bags", href: "#" },
    { name: "Hip Bags", href: "#" },
    { name: "Laptop Sleeves", href: "#" },
];
const filters = [
    {
        id: "color",
        name: "Color",
        options: [
            { value: "white", label: "White", checked: false },
            { value: "beige", label: "Beige", checked: false },
            { value: "blue", label: "Blue", checked: true },
            { value: "brown", label: "Brown", checked: false },
            { value: "green", label: "Green", checked: false },
            { value: "purple", label: "Purple", checked: false },
        ],
    },
    {
        id: "category",
        name: "Category",
        options: [
            { value: "new-arrivals", label: "New Arrivals", checked: false },
            { value: "sale", label: "Sale", checked: false },
            { value: "travel", label: "Travel", checked: true },
            { value: "organization", label: "Organization", checked: false },
            { value: "accessories", label: "Accessories", checked: false },
        ],
    },
    {
        id: "size",
        name: "Size",
        options: [
            { value: "2l", label: "2L", checked: false },
            { value: "6l", label: "6L", checked: false },
            { value: "12l", label: "12L", checked: false },
            { value: "18l", label: "18L", checked: false },
            { value: "20l", label: "20L", checked: false },
            { value: "40l", label: "40L", checked: true },
        ],
    },
];

export default function ProductsList({ productCategory, products }) {
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
    const { filters2 } = usePage().props;
    const [values, setValues] = useState({
        // role: filters.role || "", // role is used only on users page
        // search: filters.search || "",
        // trashed: filters.trashed || "",
        order: filters2?.order || "",
        sort: filters2?.sort || "",
    });
    const orderBy = (e) => {
        Inertia.get(
            route(route().current(), [productCategory]),
            { order: e.order, sort: e.sort },
            {
                preserveState: true,
                replace: true,
            }
        );
    };

    return (
        <div className="bg-white">
            <div>
                <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                            Laptops
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
                            {/* Filters */}
                            <form className="hidden lg:block">
                                <InputLabel
                                    forInput="search"
                                    value="Search product"
                                />

                                <input
                                    type="text"
                                    value=""
                                    className={`mt-5 w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm `}
                                />

                                <InputError message="" className="mt-10" />
                                <h3 className="sr-only">Categories</h3>
                                <ul
                                    role="list"
                                    className="space-y-4 border-b pt-10 border-gray-200 pb-6 text-sm font-medium text-gray-900"
                                >
                                    {subCategories.map((category) => (
                                        <li key={category.name}>
                                            <a href={category.href}>
                                                {category.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>

                                {filters.map((section) => (
                                    <Disclosure
                                        as="div"
                                        key={section.id}
                                        className="border-b border-gray-200 py-6"
                                    >
                                        {({ open }) => (
                                            <>
                                                <h3 className="-my-3 flow-root">
                                                    <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                                                        <span className="font-medium text-gray-900">
                                                            {section.name}
                                                        </span>
                                                        <span className="ml-6 flex items-center">
                                                            {open ? (
                                                                <MinusIcon
                                                                    className="h-5 w-5"
                                                                    aria-hidden="true"
                                                                />
                                                            ) : (
                                                                <PlusIcon
                                                                    className="h-5 w-5"
                                                                    aria-hidden="true"
                                                                />
                                                            )}
                                                        </span>
                                                    </Disclosure.Button>
                                                </h3>
                                                <Disclosure.Panel className="pt-6">
                                                    <div className="space-y-4">
                                                        {section.options.map(
                                                            (
                                                                option,
                                                                optionIdx
                                                            ) => (
                                                                <div
                                                                    key={
                                                                        option.value
                                                                    }
                                                                    className="flex items-center"
                                                                >
                                                                    <input
                                                                        id={`filter-${section.id}-${optionIdx}`}
                                                                        name={`${section.id}[]`}
                                                                        defaultValue={
                                                                            option.value
                                                                        }
                                                                        type="checkbox"
                                                                        defaultChecked={
                                                                            option.checked
                                                                        }
                                                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                                    />
                                                                    <label
                                                                        htmlFor={`filter-${section.id}-${optionIdx}`}
                                                                        className="ml-3 text-sm text-gray-600"
                                                                    >
                                                                        {
                                                                            option.label
                                                                        }
                                                                    </label>
                                                                </div>
                                                            )
                                                        )}
                                                    </div>
                                                </Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure>
                                ))}
                            </form>

                            {/* Product grid */}
                            <div className="lg:col-span-3">
                                {/* Replace with your content */}

                                <section>
                                    <div className="grid grid-cols-4 gap-4 lg:grid-cols-3 lg:items-start">
                                        <div className="lg:col-span-3 sm:col-span-2">
                                            <div className="flex items-center justify-between">
                                                <p className="text-sm text-gray-500">
                                                    <span className="hidden sm:inline">
                                                        {" "}
                                                        Showing{" "}
                                                    </span>
                                                    {products.data.length} of 24
                                                    Products
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
                                                                            option
                                                                        ) => (
                                                                            <Menu.Item
                                                                                key={
                                                                                    option.name
                                                                                }
                                                                            >
                                                                                <a
                                                                                    onClick={() => {
                                                                                        option.active = true;
                                                                                        orderBy(
                                                                                            {
                                                                                                order: option.order,
                                                                                                sort: option.sort,
                                                                                            }
                                                                                        );
                                                                                    }}
                                                                                    className={`
                                                                                        ${
                                                                                            option.active
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

                                {/* /End replace */}
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
}
