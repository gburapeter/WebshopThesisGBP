import React from "react";

import StepLayout from "./StepLayout";
import StepsFooter from "./StepsFooter";
import OrderPreview from "../../OrderPreview";
import { usePage } from "@inertiajs/inertia-react";
import OrderProduct from "../../OrderProduct";
import HoverAnimation from "@/Components/HoverAnimation";

const OrderSummaryStep = (props) => {
    const submit = (e) => {
        e.preventDefault();

        props.post(route("orders.store"));
    };
    const { cartProducts, cartTotal } = usePage().props;
    return (
        <StepLayout>
            <div className="flex flex-col text-center w-full">
                <h1 className="text-xl font-bold title-font mb-10 text-gray-900">
                    Order overview
                </h1>
            </div>

            <section>
                <div class="relative mx-auto ">
                    <div class="grid grid-cols-1 md:grid-cols-2">
                        <HoverAnimation classAttr="border border-indigo-500 shadow-lg">
                            <div
                                onClick={() => props.goToStep(1)}
                                class="bg-white py-4 md:py-4 cursor-pointer "
                            >
                                <div class="mx-auto max-w-lg px-4 lg:px-8">
                                    <div class="pt-10 pb-10">
                                        <div class="flow-root h-60 overflow-y-auto ">
                                            <ul class="-my-4 divide-y divide-gray-200 ">
                                                {cartProducts?.map(
                                                    (orderitem) => (
                                                        <OrderProduct
                                                            orderitem={
                                                                orderitem
                                                            }
                                                        />
                                                    )
                                                )}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </HoverAnimation>
                        <div class="bg-white">
                            <OrderPreview
                                goToStep={props.goToStep}
                                data={props.data}
                            />
                        </div>
                    </div>
                </div>
            </section>
            <div class="mt-8 text-right">
                <p class="mt-1 text-sm text-gray-500">Total</p>
                <p class="text-2xl font-medium text-indigo-500 tracking-tight">
                    ${cartTotal}
                </p>
            </div>

            <div className="flex flex-col text-right w-full pt-20">
                <StepsFooter step={4} {...props} nextStep={submit} />
            </div>
        </StepLayout>
    );
};

export default OrderSummaryStep;
