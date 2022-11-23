import React from "react";

const ShippingInfo = () => {
    return (
        <div className="flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 space-y-6   ">
            <h3 className="text-xl font-semibold leading-5 text-gray-800">
                We are shipping with:
            </h3>
            <div className="flex justify-between items-start w-full">
                <div className="flex justify-center items-center space-x-4">
                    <div className="w-16 h-16">
                        <img
                            className="w-full h-full"
                            alt="logo"
                            src="../images/OrderShow/logo_thumb.png"
                        />
                    </div>
                    <div className="flex flex-col justify-start items-center">
                        <p className="text-lg leading-6 font-semibold text-gray-800">
                            GLS International
                            <br />
                            <span className="font-normal">
                                24 hours delivery
                            </span>
                        </p>
                    </div>
                </div>
                <p className="text-lg font-semibold pt-2 text-gray-800">
                    $0.00
                </p>
            </div>
            <div className="w-full flex justify-center items-center">
                <a
                    href="https://gls-group.com//"
                    className="text-center hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-5 w-96 md:w-full bg-gray-800 text-base font-medium leading-4 text-white"
                >
                    Go to carrier webpage
                </a>
            </div>
        </div>
    );
};

export default ShippingInfo;
