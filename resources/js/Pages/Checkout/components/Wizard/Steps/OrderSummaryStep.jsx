import React from "react";

import StepLayout from "./StepLayout";
import StepsFooter from "./StepsFooter";
import OrderPreview from "../../OrderPreview";
import { usePage } from "@inertiajs/inertia-react";
import OrderProduct from "../../OrderProduct";
import HoverAnimation from "@/Components/HoverAnimation";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { Inertia } from "@inertiajs/inertia";

const OrderSummaryStep = (props) => {
    const submit = (e) => {
        e.preventDefault();

        props.nextStep();
    };

    const handleCreateOrder = (data, actions) => {
        return fetch("/api/paypal/create", {
            method: "post",
            body: JSON.stringify({
                total_price: cartTotal,
            }),
            // use the "body" param to optionally pass additional order information
            // like product ids or amount
        })
            .then((response) => response.json())
            .then((order) => order.id);
    };
    // ;!p7tRx#
    const handleApprovedOrder = (data, actions) => {
        return fetch(`/api/paypal/capture`, {
            method: "post",
            body: JSON.stringify({
                orderId: data.orderID,
            }),
        })
            .then((response) => response.json())
            .then((orderData) => {
                console.log(orderData);
                // Successful capture! For dev/demo purposes:
                Inertia.post(
                    route("orders.store"),
                    {
                        ...props.data,
                        reference_number: orderData.id,
                        status: orderData.status,
                    },
                    {
                        onSuccess: () => {
                            Inertia.get(route("home"));
                        },
                    }
                );
            });
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
                <div className="relative mx-auto ">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <HoverAnimation classAttr="border border-indigo-500 shadow-lg">
                            <div
                                onClick={() => props.goToStep(1)}
                                className="bg-white py-4 md:py-4 cursor-pointer "
                            >
                                <div className="mx-auto max-w-lg px-4 lg:px-8">
                                    <div className="pt-10 pb-10">
                                        <div className="flow-root h-60 overflow-y-auto ">
                                            <ul className="-my-4 divide-y divide-gray-200 ">
                                                {cartProducts?.map(
                                                    (orderitem, index) => (
                                                        <OrderProduct
                                                            key={index}
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
                        <div className="bg-white">
                            <OrderPreview
                                goToStep={props.goToStep}
                                data={props.data}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <div className="grid overflow-hidden grid-cols-6 grid-rows-1 gap-2 mt-10">
                <div className="box col-span-6 text-center">
                    <h1 className="text-2xl text-center font-bold title-font mb-10 text-gray-900">
                        Total:{" "}
                        <span className="text-indigo-500">${cartTotal}</span>
                    </h1>
                    <h1 className="text-xl text-center font-bold title-font mb-10 mt-20 text-gray-900">
                        Complete order by using:
                    </h1>
                    <PayPalButtons
                        createOrder={(data, actions) =>
                            handleCreateOrder(data, actions)
                        }
                        onApprove={(data, actions) =>
                            handleApprovedOrder(data, actions)
                        }
                    />
                </div>
            </div>

            <div className="flex flex-col text-right w-full pt-20">
                <StepsFooter step={4} {...props} nextStep={submit} />
            </div>
        </StepLayout>
    );
};

export default OrderSummaryStep;
