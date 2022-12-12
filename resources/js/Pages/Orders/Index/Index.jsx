import React from "react";
import EmptyOrdersMessage from "./EmptyOrdersMessage";
import { OrdersTable } from "./OrdersTable";

const Index = ({ orders }) => {
    return (
        <div className=" justify-center align-center flex">
            <div className="xl:w-3/4 2xl:w-4/5 w-full">
                <div className="px-4 md:px-10 py-4 md:py-7">
                    <div className="sm:flex items-center justify-center">
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800 hover:text-indigo-500">
                            Orders
                        </p>
                    </div>
                </div>
                <div className="bg-white px-4 md:px-10 pb-5 py-10 ">
                    <div className="overflow-x-auto">

                        {orders.length ?
                            <OrdersTable orders={orders} />
                            : <EmptyOrdersMessage />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;
