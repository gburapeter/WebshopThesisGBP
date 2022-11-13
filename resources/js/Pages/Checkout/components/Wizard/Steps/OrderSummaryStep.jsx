import React from "react";

import StepLayout from "./StepLayout";
import StepsFooter from "./StepsFooter";

const OrderSummaryStep = (props) => {
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

            <div className="flex flex-wrap pt-10 -m-4"></div>

            <div className="flex flex-col text-right w-full pt-20">
                <StepsFooter step={1} {...props} />
            </div>
        </StepLayout>
    );
};

export default OrderSummaryStep;
