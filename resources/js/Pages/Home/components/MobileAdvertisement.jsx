export const MobileAdvertisement = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
                <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
                    <div className="max-w-xl mb-6">
                        <div></div>
                        <h2 className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none max-w-lg mb-6">
                            Available
                            <br className="hidden md:block" />
                            on every{" "}
                            <span className="inline-block font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
                                platform
                            </span>
                        </h2>
                        <p className="text-gray-700 text-base md:text-lg">
                            Do you feel like shopping while on the road? We got
                            you! Download and use our super fast apps wherever
                        </p>
                    </div>
                    <div className="flex items-center space-x-3">
                        <a
                            href="/"
                            className="w-32 transition duration-300 hover:shadow-lg"
                        >
                            <img
                                src="images/Homepage/google-play.png"
                                className="object-cover object-top w-full h-auto mx-auto"
                                alt=""
                            />
                        </a>
                        <a
                            href="/"
                            className="w-32 transition duration-300 hover:shadow-lg"
                        >
                            <img
                                src="images/Homepage/app-store.png"
                                className="object-cover object-top w-full h-auto mx-auto"
                                alt=""
                            />
                        </a>
                    </div>
                </div>
                <div className="flex items-center justify-center lg:w-1/2">
                    <div className="w-2/5">
                        <img
                            className="object-cover"
                            src="images/Homepage/mobile1.png"
                            alt=""
                        />
                    </div>
                    <div className="w-5/12 -ml-16 lg:-ml-32">
                        <img
                            className="object-cover"
                            src="images/Homepage/mobile2.png"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
