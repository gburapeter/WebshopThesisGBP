import React from "react";
import OrderItem from "./components/OrderItem";
import ShippingAddress from "./components/ShippingAddress";
import ShippingInfo from "./components/ShippingInfo";
import SummaryBox from "./components/SummaryBox";

export const Show = ({ order, address, user, orderItems }) => {
    console.log(orderItems);
    return (
        <div className="bg-white py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
            <div className="flex justify-start item-start space-y-2 flex-col ">
                <h1 className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9  text-gray-800">
                    Order{" "}
                    <span className="text-indigo-300">
                        #{order.reference_number}
                    </span>
                </h1>
                <p className="text-base font-medium leading-6 text-gray-600">
                    {order.updated_at}
                </p>
            </div>
            <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch  w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
                <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
                    <div className="flex  flex-col justify-start items-start bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
                        <p className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-gray-800">
                            Purchased items
                        </p>
                        {orderItems.map((item, index) => (
                            <OrderItem key={index} item={item} />
                        ))}
                    </div>
                    <div className="flex justify-center md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
                        <SummaryBox order={order} />
                        <ShippingInfo />
                    </div>
                </div>
                <div className="bg-gray-50 w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col ">
                    <h3 className="text-xl font-semibold leading-5 text-gray-800">
                        Purchased by
                    </h3>
                    <div className="flex  flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0 ">
                        <div className="flex flex-col justify-start items-start flex-shrink-0">
                            <div className="flex justify-center  w-full  md:justify-start items-center space-x-4 py-8 border-b border-gray-200">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-12 h-12 text-indigo-500"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                                    />
                                </svg>

                                <div className=" flex justify-start items-start flex-col space-y-2">
                                    <p className="text-base font-semibold leading-4 text-left text-gray-800">
                                        {user.name}
                                    </p>
                                    <p className="text-sm leading-5 text-gray-600">
                                        +{user.phone}
                                    </p>
                                </div>
                            </div>

                            <div className="flex justify-center  md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z"
                                        stroke="#1F2937"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M3 7L12 13L21 7"
                                        stroke="#1F2937"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                <p className="cursor-pointer text-sm leading-5 text-gray-800">
                                    {user.email}
                                </p>
                            </div>
                        </div>
                        <ShippingAddress address={address} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Show;
