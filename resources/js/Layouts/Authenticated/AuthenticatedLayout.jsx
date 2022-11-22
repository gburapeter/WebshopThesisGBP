import Footer from "@/Layouts/Authenticated/components/Footer/Footer";
import Navbar from "@/Layouts/Authenticated/components/Header/Navbar/Navbar";
import Subbar from "@/Layouts/Authenticated/components/Header/Subbar/Subbar";
import SidebarDrawer from "@/Layouts/Authenticated/components/SidebarDrawer/SidebarDrawer";
import CartModal from "@/Pages/Cart/CartModal";
import { usePage } from "@inertiajs/inertia-react";
import { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function AuthenticatedLayout({ header, children, title }) {
    const { auth } = usePage().props;
    const [open, setOpen] = useState(false);
    return (
        <PayPalScriptProvider
            options={{
                "client-id":
                    "AUkxKbxYtcD8l0Zdkz4YzBnGYkLWrNv190BLEFJqQrwqAypLIu3UXOn3GsAUPD05LyAla30Mni4AVLwD",
                currency: "USD",
            }}
        >
            <div>
                <div className="drawer ">
                    <input
                        id="my-drawer"
                        type="checkbox"
                        className="drawer-toggle"
                    />

                    <div className="drawer-content">
                        <div className="min-h-full bg-gradient-to-r from-indigo-100 to-rose-50">
                            <Navbar
                                user={auth.user}
                                open={open}
                                setOpen={setOpen}
                            />
                            <Subbar user={auth.user} />

                            {/* <Header title={title} message={auth.user.name} /> */}
                            <main>
                                <div className="relative min-h-full rounded-md  overflow-y-auto bg-inherit mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                                    {children}
                                </div>
                            </main>
                            <Footer />
                            <CartModal open={open} setOpen={setOpen} />
                        </div>
                    </div>
                    <div className="drawer-side">
                        <label
                            htmlFor="my-drawer"
                            className="drawer-overlay"
                        ></label>

                        <div className=" p-4 w-3/5 overflow-y-auto bg-gradient-to-r from-indigo-100 to-rose-50">
                            <div className="w-full">
                                <SidebarDrawer />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PayPalScriptProvider>
    );
}
