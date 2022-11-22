import React from "react";
import { Inertia } from "@inertiajs/inertia";
export const OrdersTable = ({ orders }) => {
    return (
        <table className="w-full whitespace-nowrap ">
            <tbody className="divide-y cursor-pointer">
                {orders.map((order, index) => (
                    <tr
                        onClick={() =>
                            Inertia.visit(route("orders.show", [order]))
                        }
                        className="text-sm leading-none text-gray-600 h-20 hover:bg-indigo-100 text-center"
                    >
                        <td className="">
                            <div className="flex items-center">
                                <div className="w-10 h-10 bg-indigo-500 rounded-sm flex items-center justify-center">
                                    <p className="text-xs font-bold leading-3 text-white">
                                        #{order.id}
                                    </p>
                                </div>
                                <div className="pl-2">
                                    <p className="text-sm font-medium leading-none text-gray-800">
                                        Order #{order.id}
                                    </p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <p>{order.username}</p>
                        </td>
                        <td>
                            <p className="font-bold">{order.total_price}$</p>
                        </td>
                        <td>
                            <p className="font-bold">
                                {order.total_items} items
                            </p>
                        </td>
                        <td>
                            <p className="font-bold">{order.order_status}</p>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
