import React from "react";

import StepLayout from "./StepLayout";
import StepsFooter from "./StepsFooter";
import OrderPreview from "../../OrderPreview";
import { usePage } from "@inertiajs/inertia-react";
import OrderProduct from "../../OrderProduct";
import HoverAnimation from "@/Components/HoverAnimation";

const PaymentStep = (props) => {
    const submit = (e) => {
        e.preventDefault();

        alert("go");
        // props.post(route("orders.store"));
    };
    const { cartProducts, cartTotal } = usePage().props;
    return (
        <StepLayout>
            <div className="flex flex-col text-center w-full">
                <h1 className="text-xl font-bold title-font mb-10 text-gray-900">
                    Payment
                </h1>
            </div>

            <section>
                <div class="relative mx-auto ">
                    <div class="grid grid-cols-1 md:grid-cols-2"></div>
                </div>
            </section>

            <div className="flex flex-col text-right w-full pt-20">
                <StepsFooter step={5} {...props} nextStep={submit} />
            </div>
        </StepLayout>
    );
};

export default PaymentStep;
