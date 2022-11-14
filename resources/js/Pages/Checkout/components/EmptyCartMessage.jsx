import HoverAnimation from "@/Components/HoverAnimation";
import { Inertia } from "@inertiajs/inertia";
import React from "react";

const EmptyCartMessage = () => {
    const changeRoute = () => {
        Inertia.visit(route("categories.show", [2]));
    };
    return (
        <div className=" cursor-pointer indicator w-full flex flex-col items-center p-6 rounded-lg">
            <h1 className="text-3xl font-bold text-red-500">
                Oops, your cart looks empty!
            </h1>
            <h1 className="text-md italic font-bold text-indigo-500">
                Press on the cart to continue shopping
            </h1>

            <img
                onClick={changeRoute}
                className=" w-1/3 cursor-pointer"
                src="https://www.altclasses.in/assets/img/cart.gif"
            />
        </div>
    );
};

export default EmptyCartMessage;
