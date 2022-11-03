import InputError from "@/Components/Form/InputError";
import InputLabel from "@/Components/Form/InputLabel";
import { useForm } from "@inertiajs/inertia-react";
import React from "react";
import { CheckoutProduct } from "../../CheckoutProduct";
import StepLayout from "./StepLayout";
import StepsFooter from "./StepsFooter";

const DeliveryInfoStep = (props) => {
    const update = (e) => {
        console.log(props.currentStep);
        props.update(e.target.name, e.target.value);
    };

    const validate = () => {
        if (confirm("Are you sure you want to go back?")) {
            // eslint-disable-line
            props.previousStep();
        }
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("shipments.store"));
    };

    const { data, setData, post, processing, errors, reset } = useForm();

    return (
        <StepLayout>
            <form onSubmit={submit} method="POST">
                <div class="flex flex-col text-center w-full">
                    <h1 class="text-xl font-medium title-font mb-4 text-gray-900">
                        Please enter your delivery information
                    </h1>
                </div>

                <div class="grid overflow-hidden grid-cols-6  grid-rows-1 gap-5 pt-10 ">
                    <div class="box col-span-3">
                        {" "}
                        <label
                            htmlFor="first-name"
                            className="block text-sm font-medium text-gray-700"
                        >
                            First name
                        </label>
                        <input
                            type="text"
                            value={data.firstname}
                            className={`mt-1 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm `}
                            onChange={(e) =>
                                setData("firstname", e.target.value)
                            }
                        />
                        <InputError
                            message={errors.firstname}
                            className="mt-2"
                        />
                    </div>
                    <div class="box col-span-3">
                        <label
                            htmlFor="last-name"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Last name
                        </label>
                        <input
                            type="text"
                            value={data.lastname}
                            className={`mt-1 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm `}
                            onChange={(e) =>
                                setData("lastname", e.target.value)
                            }
                        />
                        <InputError
                            message={errors.lastname}
                            className="mt-2"
                        />
                    </div>
                    <div class="box col-span-3">
                        {" "}
                        <InputLabel forInput="email" value="Email" />
                        <input
                            type="text"
                            value={data.email}
                            className={`mt-1 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm `}
                            onChange={(e) => setData("email", e.target.value)}
                        />
                        <InputError message={errors.email} className="mt-2" />
                    </div>
                    <div class="box col-span-3">
                        <InputLabel forInput="phone" value="Phone" />

                        <input
                            type="text"
                            value={data.phone}
                            className={`mt-1 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm `}
                            onChange={(e) => setData("phone", e.target.value)}
                        />

                        <InputError message={errors.phone} className="mt-2" />
                    </div>
                    <div class="box col-span-6 text-center ">
                        {" "}
                        <label
                            htmlFor="country"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Country
                        </label>
                        <select
                            id="country"
                            name="country"
                            value={data.country}
                            autoComplete="country-name"
                            onChange={(e) => setData("country", e.target.value)}
                            className="mt-1 text-center block w-full rounded-md border border-gray-300 bg-white py-2 mt-4 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        >
                            <option></option>
                            <option>United States</option>
                            <option>Canada</option>
                            <option>Mexico</option>
                        </select>
                        <InputError message={errors.country} className="mt-2" />
                    </div>

                    <div class="box col-span-3">
                        {" "}
                        <label
                            htmlFor="city"
                            className="block text-sm font-medium text-gray-700"
                        >
                            City
                        </label>
                        <input
                            type="text"
                            value={data.city}
                            className={`mt-1 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm `}
                            onChange={(e) => setData("city", e.target.value)}
                        />
                        <InputError message={errors.city} className="mt-2" />
                    </div>

                    <div class="box col-span-3">
                        <label
                            htmlFor="region"
                            className="block text-sm font-medium text-gray-700"
                        >
                            State / Province
                        </label>
                        <input
                            type="text"
                            value={data.state}
                            className={`mt-1 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm `}
                            onChange={(e) => setData("state", e.target.value)}
                        />
                        <InputError message={errors.state} className="mt-2" />
                    </div>

                    <div class="box col-span-3">
                        <label
                            htmlFor="street-address"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Street address
                        </label>
                        <input
                            type="text"
                            value={data.street_name}
                            className={`mt-1 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm `}
                            onChange={(e) =>
                                setData("street_name", e.target.value)
                            }
                        />
                        <InputError
                            message={errors.street_name}
                            className="mt-2"
                        />
                    </div>

                    <div class="box col-span-3">
                        {" "}
                        <label
                            htmlFor="street-address"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Street number
                        </label>
                        <input
                            type="text"
                            value={data.street_number}
                            className={`mt-1 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm `}
                            onChange={(e) =>
                                setData("street_number", e.target.value)
                            }
                        />
                        <InputError
                            message={errors.street_number}
                            className="mt-2"
                        />
                    </div>

                    <div class="box col-span-3">
                        {" "}
                        <label
                            htmlFor="street-address"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Suite / apt / floor
                        </label>
                        <input
                            type="text"
                            value={data.suite}
                            className={`mt-1 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm `}
                            onChange={(e) => setData("suite", e.target.value)}
                        />
                        <InputError message={errors.suite} className="mt-2" />
                    </div>
                    <div class="box col-span-3">
                        <label
                            htmlFor="postal-code"
                            className="block text-sm font-medium text-gray-700"
                        >
                            ZIP / Postal code
                        </label>
                        <input
                            type="text"
                            value={data.postal_code}
                            className={`mt-1 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm `}
                            onChange={(e) =>
                                setData("postal_code", e.target.value)
                            }
                        />
                    </div>
                </div>

                <div class="flex flex-col text-right w-full pt-20">
                    <StepsFooter step={2} {...props} nextStep={submit} />
                </div>
            </form>
        </StepLayout>
    );
};

export default DeliveryInfoStep;
