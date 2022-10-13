import MyTabs from "@/Layouts/Authenticated/components/SidebarDrawer/SidebarDrawer";
import Footer from "@/Layouts/Authenticated/components/Footer/Footer";
import Header1 from "@/Layouts/Authenticated/components/Header/Subbar/Subbar";
import Header2 from "@/Layouts/Authenticated/components/Header/Navbar/Navbar";
import { usePage } from "@inertiajs/inertia-react";
import Navbar from "@/Layouts/Authenticated/components/Header/Navbar/Navbar";
import Subbar from "@/Layouts/Authenticated/components/Header/Subbar/Subbar";
import Header from "@/Components/Header";
import SidebarDrawer from "@/Layouts/Authenticated/components/SidebarDrawer/SidebarDrawer";

const user = {
    name: "Tom Cook",
    email: "tom@example.com",
    imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

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
                    <div className="min-h-full">
                        <Navbar user={auth.user} />
                        <Subbar user={auth.user} />

                        <Header title={title} message={auth.user.name} />
                        <main>
                            <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                                {/* Replace with your content */}

                                {children}

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

                    <div className=" p-4 overflow-y-auto w-1/2 bg-gradient-to-r from-sky-100 to-green-200">
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
