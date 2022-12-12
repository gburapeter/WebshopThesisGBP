import React from "react";

const EmptyOrdersMessage = () => {
    return (
        <div className="h-screen">
            <div className="flex items-center justify-center py-4">
                <div className="bg-white rounded-md flex items-center justify-center mx-4 md:w-2/3 ">
                    <div className="flex flex-col items-center py-16 ">
                        <img className="px-4 hidden md:block"
                            src="images/ordersno.jpg" alt="" />
                        <h1 className="px-4 pt-8 pb-4 text-center text-5xl font-bold leading-10 text-gray-800">OOPS! </h1>
                        <p className="px-4 pb-10 text-base leading-none text-center text-gray-600">No orders yet! Complete a purchase to see your order here</p>
                        <a href={route("categories.show",[2])} className="text-center pt-2 mx-4 h-10 w-60 border rounded-md text-white text-base bg-indigo-500 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-indigo-800">Take me shopping</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmptyOrdersMessage;
