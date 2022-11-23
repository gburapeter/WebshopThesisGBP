import React from "react";

const OrderItem = ({ item }) => {
    const calculatePrice = (price, quantity) => {
        return price * quantity;
    };
    return (
        <div className="mt-4 md:mt-6 flex  flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full ">
            <div className="pb-4 md:pb-8 w-full md:w-40">
                <img
                    alt={item.product_name}
                    src={item.image_path + "/Main.jpg"}
                    className="w-28 hidden md:block"
                />
                <img
                    className="w-full md:hidden"
                    alt={item.product_name}
                    src={item.image_path + "/Main.jpg"}
                />
            </div>
            <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full  pb-8 space-y-4 md:space-y-0">
                <div className="w-full flex flex-col justify-start items-start space-y-8">
                    <h3 className="text-xl xl:text-2xl font-semibold leading-6 text-gray-800">
                        {item.product_name}
                    </h3>
                </div>
                <div className="pl-3 flex justify-between space-x-8 items-start w-full">
                    <p className="text-base xl:text-lg leading-6">
                        {item.product_price}$
                    </p>
                    <p className="text-base xl:text-lg leading-6 text-gray-800">
                        {item.quantity}x
                    </p>
                    <p className="text-base xl:text-lg font-semibold leading-6 text-gray-800">
                        {calculatePrice(item.product_price, item.quantity)}$
                    </p>
                </div>
            </div>
        </div>
    );
};

export default OrderItem;
