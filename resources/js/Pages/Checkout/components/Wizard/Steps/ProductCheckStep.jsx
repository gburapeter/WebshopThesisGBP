import { usePage } from "@inertiajs/inertia-react";
import React from "react";
import CheckoutProduct from "../../CheckoutProduct";

import StepLayout from "./StepLayout";
import StepsFooter from "./StepsFooter";

const ProductCheckStep = (props) => {
    const { cartProducts, cartTotal } = usePage().props;
    console.log(cartProducts);
    const update = (e) => {
        console.log(props.currentStep);
        props.update(e.target.name, e.target.value);
    };

    return (
        <StepLayout>
            <div className="flex flex-col text-center w-full">
                <h1 className="text-xl font-medium title-font mb-4 text-gray-900">
                    Please double check your cart
                </h1>
            </div>

            <div className="flex flex-wrap pt-10 -m-4">
                {cartProducts.map((item, index) => (
                    <CheckoutProduct key={index} item={item} />
                ))}
            </div>

            <div className="flex flex-col text-right w-full pt-20">
                <StepsFooter step={1} {...props} />
            </div>
        </StepLayout>
    );
};

export default ProductCheckStep;
