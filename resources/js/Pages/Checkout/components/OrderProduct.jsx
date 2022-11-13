import React from "react";

const OrderProduct = ({ orderitem }) => {
    return (
        <>
            <li class="flex items-center justify-between py-4">
                <div class="flex items-start">
                    <img
                        alt={orderitem.product.product_name}
                        src={orderitem.product.image_path + "/Main.jpg"}
                        class="h-16 w-16 flex-shrink-0 rounded-lg border object-fill"
                    />

                    <div class="ml-4 ">
                        <p class="text-md">{orderitem.product.product_name}</p>

                        <dl class="mt-1 space-y-1 text-xs text-gray-500">
                            <div>
                                {/* <dt class="inline">Color:</dt>
                                <dd class="inline">Blue</dd> */}
                            </div>

                            <div>
                                {/* <dt class="inline">Size:</dt>
                                <dd class="inline">UK 10</dd> */}
                            </div>
                        </dl>
                    </div>
                </div>

                <div>
                    <p class="text-md text-indigo-800 font-bold">
                        ${orderitem.product.product_price}{" "}
                        <small class="text-black font-bold">
                            x{orderitem.quantity}
                        </small>
                    </p>
                </div>
            </li>
        </>
    );
};

export default OrderProduct;
