import Dropdown from "@/Components/Navigation/Dropdown";
import React from "react";

export default function Header2({ user }) {
    return (
        <div className="bg-gradient-to-r from-sky-100 to-green-200">
            <div className="navbar mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="navbar-start ">
                    {/* <a className="font-semibold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 normal-case text-3xl">
                        Webshop
                    </a> */}
                    <a
                        href="/"
                        aria-label="Company"
                        title="Company"
                        className="btn btn-ghost inline-flex items-center mr-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300"
                    >
                        <svg
                            className="w-8 text-teal-accent-400"
                            viewBox="0 0 24 24"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            stroke="currentColor"
                            fill="none"
                        >
                            <rect x="3" y="1" width="7" height="12" />
                            <rect x="3" y="17" width="7" height="6" />
                            <rect x="14" y="1" width="7" height="6" />
                            <rect x="14" y="11" width="7" height="12" />
                        </svg>

                        <span className="font-semibold  normal-case text-3xl">
                            Webshop
                        </span>
                    </a>
                    {/* <img
                        className="h-10 w-30  "
                        src="https://i.ibb.co/0MsKfQR/acfda88101fa9029e571343ddb431eb4-removebg-preview.png"
                        alt="My Happy SVG"
                    /> */}
                </div>
                <div className="navbar-center w-1/3  flex-center">
                    <form className="flex w-full  items-center">
                        <div className="form-control w-full">
                            <div className="input-group">
                                <input
                                    type="text"
                                    placeholder="Type here"
                                    className="input  input-bordered input-info w-full max-w-xs"
                                />
                                <button className="btn btn-square h-1/2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="navbar-end">
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

                    <div className="dropdown dropdown-end">
                        <label
                            tabIndex={0}
                            className="btn btn-ghost btn-circle"
                        >
                            <div className="indicator">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                    />
                                </svg>
                                <span className="badge badge-sm indicator-item">
                                    8
                                </span>
                            </div>
                        </label>
                        <div
                            tabIndex={0}
                            className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
                        >
                            <div className="card-body">
                                <span className="font-bold text-lg">
                                    8 Items
                                </span>
                                <span className="text-info">
                                    Subtotal: $999
                                </span>
                                <div className="card-actions">
                                    <button className="btn btn-primary btn-block">
                                        View cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown dropdown-end">
                        <label
                            tabIndex={0}
                            className="btn btn-ghost btn-circle avatar"
                        >
                            <div className="w-10 rounded-full">
                                <img src="https://placeimg.com/80/80/people" />
                            </div>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li>
                                <a>Settings</a>
                            </li>
                            <li>
                                {/* <a  href={route("logout")}
                                            method="post"
                                            as="button">Logout</a> */}

                                <Dropdown.Link
                                    href={route("logout")}
                                    method="post"
                                    as="button"
                                >
                                    Log Out
                                </Dropdown.Link>
                            </li>
                        </ul>
                    </div>

                    <button className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                />
                            </svg>
                            <span className="badge badge-xs badge-primary indicator-item"></span>
                        </div>
                    </button>
                </div>
            </div>
            <hr className=" border-green-50" />
        </div>
    );
}
