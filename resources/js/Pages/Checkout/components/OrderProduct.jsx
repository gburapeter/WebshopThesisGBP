import React from "react";

const OrderProduct = ({ orderitem }) => {
    return (
        <>
            <li className="flex items-center justify-between py-4">
                <div className="flex items-start">
                    <img
                        alt={orderitem.product.product_name}
                        src={orderitem.product.image_path + "/Main.jpg"}
                        className="h-16 w-16 flex-shrink-0 rounded-lg border object-fill"
                    />

                    <div className="ml-4 ">
                        <p className="text-md">
                            {orderitem.product.product_name}
                        </p>

                        <dl className="mt-1 space-y-1 text-xs text-gray-500">
                            <div>
                                {/* <dt className="inline">Color:</dt>
                                <dd className="inline">Blue</dd> */}
                            </div>

                            <div>
                                {/* <dt className="inline">Size:</dt>
                                <dd className="inline">UK 10</dd> */}
                            </div>
                        </dl>
                    </div>
                </div>

                <div>
                    <p className="text-md text-indigo-800 font-bold">
                        ${orderitem.product.product_price}{" "}
                        <small className="text-black font-bold">
                            x{orderitem.quantity}
                        </small>
                    </p>
                </div>
            </li>
        </>
    );
};

export default OrderProduct;
