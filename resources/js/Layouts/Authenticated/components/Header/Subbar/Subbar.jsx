import ResponsiveNavLink from "@/Components/Navigation/ResponsiveNavLink";
import React from "react";
function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}
const navigation = [
    { name: "Dashboard", href: "#", current: true },
    { name: "Team", href: "#", current: false },
    { name: "Projects", href: "#", current: false },
];
export default function Subbar({ user }) {
    return (
        <div className="bg-gradient-to-r from-cyan-50 to-rose-50 ">
            <div className="navbar  mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex-1">
                    <a
                        href=""
                        className="px-3 py-2 rounded-md text-sm font-medium  hover:text-blue-700"
                    >
                        <label
                            htmlFor="my-drawer"
                            className=" cursor-pointer drawer-button "
                        >
                            <div className="flex items-center btn-ghost">
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
                                        d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z"
                                    />
                                </svg>
                                <div>
                                    <span className="ml-2 font-bold ">
                                        Categories
                                    </span>
                                </div>
                            </div>
                        </label>
                    </a>
                </div>
                <div className="flex-none ">
                    <div className="border-t border-gray-200 py-6 px-4">
                        <a href="#" className="-m-2 flex items-center p-2">
                            <img
                                src="https://tailwindui.com/img/flags/flag-canada.svg"
                                alt=""
                                className="block h-auto w-5 flex-shrink-0"
                            />
                            <span className="ml-3 block text-base font-medium text-gray-900">
                                CAD
                            </span>
                            <span className="sr-only">, change currency</span>
                        </a>
                    </div>
                    <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                            <ResponsiveNavLink
                                key={item.name}
                                href={item.href}
                                active={route().current("dashboard")}
                            >
                                <span className="font-bold text-md">
                                    {item.name}
                                </span>
                            </ResponsiveNavLink>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
