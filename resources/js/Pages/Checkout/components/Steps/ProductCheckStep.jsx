import React from "react";
import { CheckoutProduct } from "../CheckoutProduct";
import StepLayout from "./StepLayout";
import StepsFooter from "./StepsFooter";

const ProductCheckStep = (props) => {
    const update = (e) => {
        console.log(props.currentStep);
        props.update(e.target.name, e.target.value);
    };

    return (
        <StepLayout>
            <div class="flex flex-col text-center w-full">
                <h1 class="text-xl font-medium title-font mb-4 text-gray-900">
                    Please double check your cart
                </h1>
            </div>

            <div class="flex flex-wrap pt-10 -m-4">
                <CheckoutProduct />
                <CheckoutProduct />
                <CheckoutProduct />
                <CheckoutProduct />
                <CheckoutProduct />
                <CheckoutProduct />
            </div>

            <div class="flex flex-col text-right w-full pt-20">
                <StepsFooter step={1} {...props} />
            </div>
        </StepLayout>
    );
};

export default ProductCheckStep;
