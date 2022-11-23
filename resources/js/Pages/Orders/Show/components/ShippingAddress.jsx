import React from "react";

const ShippingAddress = ({ address }) => {
    return (
        <div className="flex justify-between xl:h-full  items-stretch w-full flex-col mt-6 md:mt-0">
            <div className="flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row  items-center md:items-start ">
                <div className="flex justify-center md:justify-start  items-center md:items-start flex-col space-y-4 xl:mt-8">
                    <p className="text-base font-semibold leading-4 text-center md:text-left text-gray-800">
                        Shipping Address
                    </p>
                    <div className="w-48 lg:w-full xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">
                        <p className="text-sm font-medium leading-4 text-gray-600">
                            {address.country}
                            {" ,"}
                            {address.city}
                        </p>

                        <p className="text-sm font-medium leading-4 text-gray-600">
                            {address.postal_code} {address.street_name}{" "}
                            {address.street_number}
                        </p>
                    </div>
                </div>
                <div className="flex justify-center md:justify-start  items-center md:items-start flex-col space-y-4 ">
                    <p className="text-base font-semibold leading-4 text-center md:text-left text-gray-800">
                        Billing Address
                    </p>

                    <div className="w-48 lg:w-full xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">
                        <p className="text-sm font-medium leading-4 text-gray-600">
                            {address.country}
                            {" ,"}
                            {address.city}
                        </p>

                        <p className="text-sm font-medium leading-4 text-gray-600">
                            {address.postal_code} {address.street_name}{" "}
                            {address.street_number}
                        </p>
                    </div>
                    {/* </p> */}
                </div>
            </div>
            <div className="flex w-full justify-center items-center md:justify-start md:items-start">
                <button className="mt-6 md:mt-0 py-5 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 border border-gray-800 font-medium w-96 2xl:w-full text-base leading-4 text-gray-800">
                    Edit Address
                </button>
            </div>
        </div>
    );
};

export default ShippingAddress;
