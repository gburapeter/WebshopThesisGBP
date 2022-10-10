import React from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/inertia-react";

export default function Guest({ leftContent, rightContent, children }) {
    return (
        // <section class="bg-white">
        //     <div class="lg:grid lg:min-h-screen lg:grid-cols-12">
        //         <main class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6">
        //             <div class="max-w-xl lg:max-w-3xl">{leftContent}</div>
        //         </main>

        //         <aside class="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
        //             {rightContent}
        //         </aside>
        //     </div>
        // </section>

        <div>
            {children && (
                <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gradient-to-r from-sky-100 to-green-200">
                    <div className="mb-10 ml-10">
                        <Link href="/">
                            <ApplicationLogo />
                        </Link>
                    </div>

                    <div className="flex bg-white min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                        <div className="card w-full max-w-md space-y-8">
                            {children}
                        </div>
                    </div>
                </div>
            )}

            {leftContent && (
                <section className="bg-white">
                    <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
                        <section className="relative flex items-center bg-gradient-to-r from-sky-100 to-green-200 lg:col-span-5 lg:h-full xl:col-span-6">
                            {leftContent}
                        </section>

                        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6">
                            <div className="max-w-xl lg:max-w-3xl">
                                <div className="relative -mt-16 block ">
                                    {rightContent}
                                </div>
                            </div>
                        </main>
                    </div>
                </section>
            )}
        </div>
    );
}
