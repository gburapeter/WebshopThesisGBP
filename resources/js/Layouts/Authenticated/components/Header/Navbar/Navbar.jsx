import ApplicationLogo from "@/Components/ApplicationLogo";
import { usePage } from "@inertiajs/inertia-react";
import NotificationMenu from "./components/NotificationMenu";
import ProfileDropdown from "./components/ProfileDropdown";
import SearchBar from "./components/SearchBar";
import ShoppingCart from "./components/ShoppingCart";
import GuestButton from "./components/GuestButton";

export default function Navbar({ setOpen }) {
    const { cartItemNr, auth } = usePage().props;

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
                    {auth.user ? (
                        <>
                            {/* Shopping cart comp  */}
                            <ShoppingCart
                                cartItemNr={cartItemNr}
                                setOpen={setOpen}
                            />

                            {/* Notification component  */}
                            <NotificationMenu />

                            {/* Profile component  */}
                            <ProfileDropdown />
                        </>
                    ) : (
                        <>
                            <GuestButton />
                        </>
                    )}
                </div>
            </div>

            <hr className=" border-green-50" />
        </div>
    );
}
