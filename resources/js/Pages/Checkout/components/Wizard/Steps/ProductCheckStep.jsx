import { usePage } from "@inertiajs/inertia-react";
import React from "react";
import EmptyCartMessage from "../../EmptyCartMessage";
import CheckoutProduct from "../../CheckoutProduct";

import StepLayout from "./StepLayout";
import StepsFooter from "./StepsFooter";

const ProductCheckStep = (props) => {
    const { cartProducts, cartTotal } = usePage().props;

    const submit = (e) => {
        e.preventDefault();

        if (!cartProducts.length) return;
        props.nextStep();
    };
    return (
        <StepLayout>
            <div className="flex flex-col text-center w-full">
                <h1 className="text-xl font-bold  mb-10">
                    {cartProducts.length > 0 ? (
                        "Please double check your cart:"
                    ) : (
                        <EmptyCartMessage />
                    )}
                </h1>
            </div>

            <div className="flex flex-wrap pt-10 -m-4">
                {cartProducts.map((item, index) => (
                    <CheckoutProduct key={index} item={item} />
                ))}
            </div>

            {cartProducts.length > 0 && (
                <div className="flex flex-col pt-5 text-right w-full">
                    <h1 className="text-xl font-medium font-bold mb-4 ">
                        Total price:{" "}
                        <span className="text-indigo-500">{cartTotal}$</span>
                    </h1>
                </div>
            )}
            <div className="flex flex-col text-right w-full pt-20">
                <StepsFooter step={1} {...props} nextStep={submit} />
            </div>
        </StepLayout>
    );
};

export default ProductCheckStep;
