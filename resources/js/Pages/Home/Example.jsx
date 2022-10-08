import { ProductCards } from "@/Pages/Home/components/ProductCards";
import { Statistics } from "@/Pages/Home/components/Statistics";
import { MobilePhones } from "./components/MobilePhones";
import MyTabs from "@/Layouts/Authenticated/components/Drawer/MyTabs";
import Footer from "@/Layouts/Authenticated/components/Footer/Footer";
import Header1 from "@/Layouts/Authenticated/components/Header/Header1";
import Header2 from "@/Layouts/Authenticated/components/Header/Header2";
import MySwiper from "./components/MySwiper";

const user = {
    name: "Tom Cook",
    email: "tom@example.com",
    imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Example() {
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
                        <Header2 user={user} />
                        <Header1 user={user} />

                        <header className="bg-transparent shadow">
                            <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
                                <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                                    Dashboard
                                </h1>
                            </div>
                        </header>
                        <main>
                            <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                                {/* Replace with your content */}

                                {/* <Carousel2 /> */}
                                <MySwiper />

                                <ProductCards />

                                <MobilePhones />
                                {/* <MainPageMobile /> */}
                                <Statistics />

                                {/* Replace with your content */}
                                <div className="px-4 py-6 sm:px-0"></div>
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

                    <div className=" p-4 overflow-y-auto w-1/2 bg-gradient-to-r from-teal-100 to-rose-100">
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
