import ApplicationLogo from "@/Components/ApplicationLogo";
import { usePage } from "@inertiajs/inertia-react";
import ProfileDropdown from "./components/ProfileDropdown";
import SearchBar from "./components/SearchBar";
import ShoppingCart from "./components/ShoppingCart";

export default function Navbar({ user, open, setOpen }) {
    const { cartItemNr } = usePage().props;

    return (
        <div className="bg-gradient-to-r from-indigo-100 to-rose-50">
            <div className="navbar mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="navbar-start ">
                    {/* Logo  */}
                    <ApplicationLogo title="Webshop" />
                </div>
                <div className="navbar-center w-1/3  flex-center">
                    {/* Search bar  */}
                    <SearchBar />
                </div>
                <div className="navbar-end space-x-4">
                    {/* Shopping cart comp  */}
                    <ShoppingCart cartItemNr={cartItemNr} setOpen={setOpen} />

                    {/* Notification component  */}
                    <button className="btn btn-ghost hover:bg-indigo-200  btn-circle">
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

                    {/* Profile component  */}
                    <ProfileDropdown />
                </div>
            </div>

            <hr className=" border-green-50" />
        </div>
    );
}
