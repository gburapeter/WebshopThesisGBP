import Dropdown from "@/Components/Navigation/Dropdown";
import { usePage } from "@inertiajs/inertia-react";
import React from "react";
import SearchBar from "./components/SearchBar";

export default function Navbar({ user, open, setOpen }) {
    const { cartItemNr } = usePage().props;

    return (
        <div className="bg-gradient-to-r from-indigo-100 to-rose-50">
            <div className="navbar mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="navbar-start ">
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
                </div>
                <div className="navbar-center w-1/3  flex-center">
                    <SearchBar />
                </div>
                <div className="navbar-end space-x-4">
                    <div className="dropdown dropdown-end">
                        <label
                            tabIndex={0}
                            className="btn btn-ghost btn-circle"
                            onClick={() => setOpen(true)}
                        >
                            <div className="indicator">
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
                                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                                    />
                                </svg>

                                <span className="badge badge-sm indicator-item bg-indigo-500">
                                    {cartItemNr}
                                </span>
                            </div>
                        </label>
                    </div>
                    <button className="btn btn-ghost btn-circle">
                        <div className="indicator">
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
                                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                                />
                            </svg>

                            <span className="badge badge-xs badge-primary indicator-item bg-indigo-500"></span>
                        </div>
                    </button>

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
                </div>
            </div>
            <hr className=" border-green-50" />
        </div>
    );
}
