/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import {
    Disclosure,
    Menu,
    Transition,
    Dialog,
    Popover,
    Tab,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import MyTabs from "./MyTabs";

import { Tabs2 } from "./Tabs2";
import Footer from "@/Layouts/LayoutComponents/Footer";

const callouts = [
    {
        name: "Desk and Office",
        description: "Work from home accessories",
        imageSrc:
            "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg",
        imageAlt:
            "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
        href: "#",
    },
    {
        name: "Self-Improvement",
        description: "Journals and note-taking",
        imageSrc:
            "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg",
        imageAlt:
            "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
        href: "#",
    },
    {
        name: "Travel",
        description: "Daily commute essentials",
        imageSrc:
            "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg",
        imageAlt:
            "Collection of four insulated travel bottles on wooden shelf.",
        href: "#",
    },
    {
        name: "Travel",
        description: "Daily commute essentials",
        imageSrc:
            "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg",
        imageAlt:
            "Collection of four insulated travel bottles on wooden shelf.",
        href: "#",
    },
    {
        name: "Travel",
        description: "Daily commute essentials",
        imageSrc:
            "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg",
        imageAlt:
            "Collection of four insulated travel bottles on wooden shelf.",
        href: "#",
    },
    {
        name: "Travel",
        description: "Daily commute essentials",
        imageSrc:
            "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg",
        imageAlt:
            "Collection of four insulated travel bottles on wooden shelf.",
        href: "#",
    },
    {
        name: "Travel",
        description: "Daily commute essentials",
        imageSrc:
            "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg",
        imageAlt:
            "Collection of four insulated travel bottles on wooden shelf.",
        href: "#",
    },
    {
        name: "Travel",
        description: "Daily commute essentials",
        imageSrc:
            "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg",
        imageAlt:
            "Collection of four insulated travel bottles on wooden shelf.",
        href: "#",
    },
    {
        name: "Travel",
        description: "Daily commute essentials",
        imageSrc:
            "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg",
        imageAlt:
            "Collection of four insulated travel bottles on wooden shelf.",
        href: "#",
    },
];
const user = {
    name: "Tom Cook",
    email: "tom@example.com",
    imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
    { name: "Dashboard", href: "#", current: true },
    { name: "Team", href: "#", current: false },
    { name: "Projects", href: "#", current: false },
    { name: "Calendar", href: "#", current: false },
    { name: "Reports", href: "#", current: false },
];
const userNavigation = [
    { name: "Your Profile", href: "#" },
    { name: "Settings", href: "#" },
    { name: "Sign out", href: "#" },
];

const navigation2 = {
    categories: [
        {
            id: "women",
            name: "TV - Cinema",
            featured: [
                {
                    name: "New Arrivals",
                    href: "#",
                    imageSrc:
                        "https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg",
                    imageAlt:
                        "Models sitting back to back, wearing Basic Tee in black and bone.",
                },
                {
                    name: "Basic Tees",
                    href: "#",
                    imageSrc:
                        "https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg",
                    imageAlt:
                        "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
                },
            ],
            sections: [
                {
                    id: "clothing",
                    name: "Clothing",
                    items: [
                        { name: "Tops", href: "#" },
                        { name: "Dresses", href: "#" },
                        { name: "Pants", href: "#" },
                        { name: "Denim", href: "#" },
                        { name: "Sweaters", href: "#" },
                        { name: "T-Shirts", href: "#" },
                        { name: "Jackets", href: "#" },
                        { name: "Activewear", href: "#" },
                        { name: "Browse All", href: "#" },
                    ],
                },
                {
                    id: "accessories",
                    name: "Accessories",
                    items: [
                        { name: "Watches", href: "#" },
                        { name: "Wallets", href: "#" },
                        { name: "Bags", href: "#" },
                        { name: "Sunglasses", href: "#" },
                        { name: "Hats", href: "#" },
                        { name: "Belts", href: "#" },
                    ],
                },
                {
                    id: "brands",
                    name: "Brands",
                    items: [
                        { name: "Full Nelson", href: "#" },
                        { name: "My Way", href: "#" },
                        { name: "Re-Arranged", href: "#" },
                        { name: "Counterfeit", href: "#" },
                        { name: "Significant Other", href: "#" },
                    ],
                },
            ],
        },
        {
            id: "men",
            name: "Gaming",
            featured: [
                {
                    name: "New Arrivals",
                    href: "#",
                    imageSrc:
                        "https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
                    imageAlt:
                        "Drawstring top with elastic loop closure and textured interior padding.",
                },
                {
                    name: "Artwork Tees",
                    href: "#",
                    imageSrc:
                        "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
                    imageAlt:
                        "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
                },
            ],
            sections: [
                {
                    id: "clothing",
                    name: "Clothing",
                    items: [
                        { name: "Tops", href: "#" },
                        { name: "Pants", href: "#" },
                        { name: "Sweaters", href: "#" },
                        { name: "T-Shirts", href: "#" },
                        { name: "Jackets", href: "#" },
                        { name: "Activewear", href: "#" },
                        { name: "Browse All", href: "#" },
                    ],
                },
                {
                    id: "accessories",
                    name: "Accessories",
                    items: [
                        { name: "Watches", href: "#" },
                        { name: "Wallets", href: "#" },
                        { name: "Bags", href: "#" },
                        { name: "Sunglasses", href: "#" },
                        { name: "Hats", href: "#" },
                        { name: "Belts", href: "#" },
                    ],
                },
                {
                    id: "brands",
                    name: "Brands",
                    items: [
                        { name: "Re-Arranged", href: "#" },
                        { name: "Counterfeit", href: "#" },
                        { name: "Full Nelson", href: "#" },
                        { name: "My Way", href: "#" },
                    ],
                },
            ],
        },
        {
            id: "men",
            name: "Mobile devices",
        },
    ],
    pages: [
        { name: "Company", href: "#" },
        { name: "Stores", href: "#" },
    ],
};

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Example() {
    return (
        <>
            {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}

            <div className="drawer">
                <input
                    id="my-drawer"
                    type="checkbox"
                    className="drawer-toggle"
                />

                <div className="drawer-content">
                    <div className="min-h-full">
                        <Disclosure as="nav" className="bg-light">
                            {({ open }) => (
                                <>
                                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                                        <div className="flex h-16 items-center justify-between">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0 ">
                                                    <a
                                                        href=""
                                                        className="px-3 py-2 rounded-md text-sm font-medium text-gray-300  hover:text-white"
                                                    >
                                                        <label
                                                            htmlFor="my-drawer"
                                                            className=" cursor-pointer drawer-button"
                                                        >
                                                            <div className="flex items-center">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    fill="none"
                                                                    viewBox="0 0 24 24"
                                                                    strokeWidth={
                                                                        1.5
                                                                    }
                                                                    stroke="currentColor"
                                                                    className="w-6 h-6"
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z"
                                                                    />
                                                                </svg>
                                                                <div>
                                                                    <span className="ml-2 font-bold">
                                                                        Categories
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </label>
                                                    </a>
                                                </div>
                                                <div className="hidden md:block">
                                                    <div className="ml-10 flex items-baseline space-x-4">
                                                        {navigation.map(
                                                            (item) => (
                                                                <a
                                                                    key={
                                                                        item.name
                                                                    }
                                                                    href={
                                                                        item.href
                                                                    }
                                                                    className={classNames(
                                                                        item.current
                                                                            ? "bg-gray-900 text-white"
                                                                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                                                        "px-3 py-2 rounded-md text-sm font-medium "
                                                                    )}
                                                                    aria-current={
                                                                        item.current
                                                                            ? "page"
                                                                            : undefined
                                                                    }
                                                                >
                                                                    {item.name}
                                                                </a>
                                                            )
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="hidden md:block">
                                                <div className="ml-4 flex items-center md:ml-6">
                                                    <button
                                                        type="button"
                                                        className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                                    >
                                                        <span className="sr-only">
                                                            View notifications
                                                        </span>
                                                        <BellIcon
                                                            className="h-6 w-6"
                                                            aria-hidden="true"
                                                        />
                                                    </button>

                                                    {/* Profile dropdown */}
                                                    <Menu
                                                        as="div"
                                                        className="relative ml-3"
                                                    >
                                                        <div>
                                                            <Menu.Button className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                                                <span className="sr-only">
                                                                    Open user
                                                                    menu
                                                                </span>
                                                                <img
                                                                    className="h-8 w-8 rounded-full"
                                                                    src={
                                                                        user.imageUrl
                                                                    }
                                                                    alt=""
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
                                                            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                                {userNavigation.map(
                                                                    (item) => (
                                                                        <Menu.Item
                                                                            key={
                                                                                item.name
                                                                            }
                                                                        >
                                                                            {({
                                                                                active,
                                                                            }) => (
                                                                                <a
                                                                                    href={
                                                                                        item.href
                                                                                    }
                                                                                    className={classNames(
                                                                                        active
                                                                                            ? "bg-gray-100"
                                                                                            : "",
                                                                                        "block px-4 py-2 text-sm text-gray-700"
                                                                                    )}
                                                                                >
                                                                                    {
                                                                                        item.name
                                                                                    }
                                                                                </a>
                                                                            )}
                                                                        </Menu.Item>
                                                                    )
                                                                )}
                                                            </Menu.Items>
                                                        </Transition>
                                                    </Menu>
                                                </div>
                                            </div>
                                            <div className="-mr-2 flex md:hidden">
                                                {/* Mobile menu button */}
                                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                                    <span className="sr-only">
                                                        Open main menu
                                                    </span>
                                                    {open ? (
                                                        <XMarkIcon
                                                            className="block h-6 w-6"
                                                            aria-hidden="true"
                                                        />
                                                    ) : (
                                                        <Bars3Icon
                                                            className="block h-6 w-6"
                                                            aria-hidden="true"
                                                        />
                                                    )}
                                                </Disclosure.Button>
                                            </div>
                                        </div>
                                    </div>

                                    <Disclosure.Panel className="md:hidden">
                                        <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                                            {navigation.map((item) => (
                                                <Disclosure.Button
                                                    key={item.name}
                                                    as="a"
                                                    href={item.href}
                                                    className={classNames(
                                                        item.current
                                                            ? "bg-gray-900 text-white"
                                                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                                        "block px-3 py-2 rounded-md text-base font-medium"
                                                    )}
                                                    aria-current={
                                                        item.current
                                                            ? "page"
                                                            : undefined
                                                    }
                                                >
                                                    {item.name}
                                                </Disclosure.Button>
                                            ))}
                                        </div>
                                        <div className="border-t border-gray-700 pt-4 pb-3">
                                            <div className="flex items-center px-5">
                                                <div className="flex-shrink-0">
                                                    <img
                                                        className="h-10 w-10 rounded-full"
                                                        src={user.imageUrl}
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="ml-3">
                                                    <div className="text-base font-medium leading-none text-white">
                                                        {user.name}
                                                    </div>
                                                    <div className="text-sm font-medium leading-none text-gray-400">
                                                        {user.email}
                                                    </div>
                                                </div>
                                                <button
                                                    type="button"
                                                    className="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                                >
                                                    <span className="sr-only">
                                                        View notifications
                                                    </span>
                                                    <BellIcon
                                                        className="h-6 w-6"
                                                        aria-hidden="true"
                                                    />
                                                </button>
                                            </div>
                                            <div className="mt-3 space-y-1 px-2">
                                                {userNavigation.map((item) => (
                                                    <Disclosure.Button
                                                        key={item.name}
                                                        as="a"
                                                        href={item.href}
                                                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                                                    >
                                                        {item.name}
                                                    </Disclosure.Button>
                                                ))}
                                            </div>
                                        </div>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>

                        <header className="bg-white shadow">
                            <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
                                <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                                    Dashboard
                                </h1>
                            </div>
                        </header>
                        <main>
                            <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                                {/* Replace with your content */}

                                <div className="px-4 py-6 sm:px-0">
                                    <div className="h-96 rounded-lg border-4 border-dashed border-gray-200" />
                                </div>
                                {/* /End replace */}
                            </div>
                        </main>
                    </div>
                </div>
                <div className="drawer-side">
                    <label
                        htmlFor="my-drawer"
                        className="drawer-overlay"
                    ></label>

                    <div className=" p-4 overflow-y-auto w-1/2 bg-white">
                        <div className="w-full">
                            {/* <Tabs2 color="green"/> */}
                            <MyTabs />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
