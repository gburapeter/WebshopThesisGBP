import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useForm, usePage } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import HoverAnimation from "@/Components/HoverAnimation";

export default function CartModal({ open, setOpen }) {
    const { cartProducts, cartTotal } = usePage().props;

    const calculatePrice = (price, quantity) => {
        return price * quantity;
    };
    const makeOptions = (range, current) => {
        const options = [];
        for (let i = 1; i <= range; i++) {
            options.push(
                <option key={i} value={i}>
                    {i}
                </option>
            );
        }
        return options;
    };

    const handleQuantityChange = (event, cartitem) => {
        event.preventDefault();
        Inertia.put(route("cartitems.update", [cartitem.id]), {
            quantity: event.target.value,
        });
    };

    const handleRemoval = (event, cartitem) => {
        event.preventDefault();
        Inertia.delete(route("cartitems.destroy", [cartitem.id]));
    };
    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                            <Transition.Child
                                as={Fragment}
                                enter="transform transition ease-in-out duration-500 sm:duration-700"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transform transition ease-in-out duration-500 sm:duration-700"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                                    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                        <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                                            <div className="flex items-start justify-between">
                                                <Dialog.Title className="text-lg font-medium text-gray-900">
                                                    Shopping cart
                                                </Dialog.Title>
                                                <div className="ml-3 flex h-7 items-center">
                                                    <button
                                                        type="button"
                                                        className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                                                        onClick={() =>
                                                            setOpen(false)
                                                        }
                                                    >
                                                        <span className="sr-only">
                                                            Close panel
                                                        </span>
                                                        <XMarkIcon
                                                            className="h-6 w-6"
                                                            aria-hidden="true"
                                                        />
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="mt-8">
                                                <div className="flow-root">
                                                    <ul
                                                        role="list"
                                                        className="-my-6 divide-y divide-gray-200"
                                                    >
                                                        {cartProducts?.map(
                                                            (item) => (
                                                                <li
                                                                    key={
                                                                        item
                                                                            .product
                                                                            .id
                                                                    }
                                                                    className="flex py-6"
                                                                >
                                                                    <div className="h-20 w-20 flex-shrink-0 overflow-hidden border rounded-md  ">
                                                                        <img
                                                                            src={
                                                                                item
                                                                                    .product
                                                                                    .image_path +
                                                                                "/Main.jpg"
                                                                            }
                                                                            alt="alt"
                                                                            className="h-full w-full object-cover object-center"
                                                                        />
                                                                    </div>

                                                                    <div className="ml-4 flex flex-1 flex-col">
                                                                        <div>
                                                                            <div className="flex justify-between text-base font-medium text-gray-900">
                                                                                <h3>
                                                                                    <a
                                                                                        href={route(
                                                                                            "products.show",
                                                                                            [
                                                                                                item.product,
                                                                                            ]
                                                                                        )}
                                                                                        className="hover:text-indigo-300"
                                                                                    >
                                                                                        {
                                                                                            item
                                                                                                .product
                                                                                                .product_name
                                                                                        }
                                                                                    </a>
                                                                                </h3>
                                                                                <p className="ml-4">
                                                                                    $
                                                                                    {calculatePrice(
                                                                                        item
                                                                                            .product
                                                                                            .product_price,

                                                                                        item.quantity
                                                                                    )}
                                                                                </p>
                                                                            </div>
                                                                            {/* <p className="mt-1 text-sm text-gray-500">
                                                                                {
                                                                                    product.color
                                                                                }
                                                                            </p> */}
                                                                        </div>
                                                                        <div className="flex flex-1 items-end justify-between text-sm">
                                                                            <div className="flex">
                                                                                <p className="text-gray-500 self-center">
                                                                                    Quantity:{" "}
                                                                                </p>
                                                                                <select
                                                                                    className="form-select appearance-none
                                                                                        w-full
                                                                                        text-center
                                                                                        ml-3
                                                                                        text-base
                                                                                        font-normal
                                                                                        text-gray-700
                                                                                        bg-white bg-clip-padding bg-no-repeat
                                                                                        border border-solid border-gray-300
                                                                                        rounded
                                                                                        transition
                                                                                        ease-in-out
                                                                                        m-0
                                                                                        focus:text-indigo-700 focus:bg-white focus:border-indigo-600 focus:outline-none"
                                                                                    aria-label="Default select example"
                                                                                    defaultValue={
                                                                                        item.quantity
                                                                                    }
                                                                                    onChange={(
                                                                                        e
                                                                                    ) =>
                                                                                        handleQuantityChange(
                                                                                            e,
                                                                                            item
                                                                                        )
                                                                                    }
                                                                                >
                                                                                    {makeOptions(
                                                                                        item.available_quantity,
                                                                                        item.quantity
                                                                                    )}
                                                                                </select>
                                                                            </div>

                                                                            <div className="flex">
                                                                                <button
                                                                                    type="button"
                                                                                    onClick={(
                                                                                        e
                                                                                    ) =>
                                                                                        handleRemoval(
                                                                                            e,
                                                                                            item
                                                                                        )
                                                                                    }
                                                                                    className="font-medium text-indigo-600 hover:text-indigo-500"
                                                                                >
                                                                                    Remove
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            )
                                                        )}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                                            <div className="flex justify-between text-base font-medium text-gray-900">
                                                <p>Subtotal</p>
                                                <p>${cartTotal}</p>
                                            </div>
                                            <p className="mt-0.5 text-sm text-gray-500">
                                                Shipping and taxes calculated at
                                                checkout.
                                            </p>
                                            <div className="mt-6">
                                                <a
                                                    href={route("checkout")}
                                                    className="flex items-center justify-center rounded-md border border-transparent bg-green-300 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-green-500"
                                                >
                                                    Checkout
                                                </a>
                                            </div>
                                            <div className="mt-3 flex justify-center text-center text-sm text-gray-500">
                                                <div>
                                                    <p className="mb-3">or</p>

                                                    <button
                                                        type="button"
                                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                                        onClick={() =>
                                                            setOpen(false)
                                                        }
                                                    >
                                                        Continue Shopping
                                                        <span aria-hidden="true">
                                                            {" "}
                                                            &rarr;
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
}
