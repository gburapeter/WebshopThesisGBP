import Footer from "@/Layouts/Authenticated/components/Footer/Footer";
import Navbar from "@/Layouts/Authenticated/components/Header/Navbar/Navbar";
import Subbar from "@/Layouts/Authenticated/components/Header/Subbar/Subbar";
import SidebarDrawer from "@/Layouts/Authenticated/components/SidebarDrawer/SidebarDrawer";
import { usePage } from "@inertiajs/inertia-react";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function AuthenticatedLayout({ header, children, title }) {
    const { auth } = usePage().props;

    return (
        <>
            <div className="drawer">
                <input
                    id="my-drawer"
                    type="checkbox"
                    className="drawer-toggle"
                />

                <div className="drawer-content">
                    <div className="min-h-full bg-gradient-to-r from-cyan-50 to-rose-50">
                        <Navbar user={auth.user} />
                        <Subbar user={auth.user} />

                        {/* <Header title={title} message={auth.user.name} /> */}
                        <main>
                            <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                                {children}
                            </div>
                        </main>
                    </div>
                </div>
                <div className="drawer-side">
                    <label
                        htmlFor="my-drawer"
                        className="drawer-overlay"
                    ></label>

                    <div className=" p-4 w-3/5 overflow-y-auto bg-gradient-to-r from-cyan-200 to-rose-100">
                        <div className="w-full">
                            <SidebarDrawer />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
