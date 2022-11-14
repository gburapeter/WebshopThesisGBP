import InputError from "@/Components/Form/InputError";
import InputLabel from "@/Components/Form/InputLabel";
import HoverAnimation from "../../../../../Components/HoverAnimation";
import StepLayout from "./StepLayout";
import StepsFooter from "./StepsFooter";

const DeliveryInfoStep = (props) => {
    // const address = useContext(AddressContext);

    const submit = (e) => {
        e.preventDefault();

        props.post(route("shipments.store"), {
            onSuccess: () => props.nextStep(),
        });
    };

    return (
        <StepLayout>
            <form>
                <div className="flex flex-col text-center w-full">
                    <h1 className="text-xl font-medium title-font mb-4 text-gray-900">
                        Please enter your delivery information{" "}
                    </h1>
                </div>

                <div className="grid overflow-hidden grid-cols-6  grid-rows-1 gap-5 pt-10 ">
                    <div className="box col-span-3">
                        {" "}
                        <label
                            htmlFor="first-name"
                            className="block text-sm font-medium text-gray-700"
                        >
                            First name
                        </label>
                        <HoverAnimation>
                            <input
                                type="text"
                                value={props.data.firstname}
                                className={`mt-1 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm `}
                                onChange={(e) =>
                                    props.setData("firstname", e.target.value)
                                }
                            />
                        </HoverAnimation>
                        <InputError
                            message={props.errors.firstname}
                            className="mt-2"
                        />
                    </div>
                    <div className="box col-span-3">
                        <label
                            htmlFor="last-name"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Last name
                        </label>
                        <HoverAnimation>
                            <input
                                type="text"
                                value={props.data.lastname}
                                className={`mt-1 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm `}
                                onChange={(e) =>
                                    props.setData("lastname", e.target.value)
                                }
                            />
                        </HoverAnimation>
                        <InputError
                            message={props.errors.lastname}
                            className="mt-2"
                        />
                    </div>
                    <div className="box col-span-3">
                        {" "}
                        <InputLabel forInput="email" value="Email" />
                        <HoverAnimation>
                            <input
                                type="text"
                                value={props.data.email}
                                className={`mt-1 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm `}
                                onChange={(e) =>
                                    props.setData("email", e.target.value)
                                }
                            />
                        </HoverAnimation>
                        <InputError
                            message={props.errors.email}
                            className="mt-2"
                        />
                    </div>
                    <div className="box col-span-3">
                        <InputLabel forInput="phone" value="Phone" />

                        <input
                            type="text"
                            value={props.data.phone}
                            className={`mt-1 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm `}
                            onChange={(e) =>
                                props.setData("phone", e.target.value)
                            }
                        />

                        <InputError
                            message={props.errors.phone}
                            className="mt-2"
                        />
                    </div>
                    <div className="box col-span-6 text-center ">
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
                            value={props.data.country}
                            autoComplete="country-name"
                            onChange={(e) =>
                                props.setData("country", e.target.value)
                            }
                            className="mt-1 text-center block w-full rounded-md border border-gray-300 bg-white py-2 mt-4 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        >
                            <option></option>
                            <option value="Denmark">Denmark</option>
                            <option value="Hungary">Hungary</option>
                        </select>
                        <InputError
                            message={props.errors.country}
                            className="mt-2"
                        />
                    </div>

                    <div className="box col-span-3">
                        {" "}
                        <label
                            htmlFor="city"
                            className="block text-sm font-medium text-gray-700"
                        >
                            City
                        </label>
                        <input
                            type="text"
                            value={props.data.city}
                            className={`mt-1 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm `}
                            onChange={(e) =>
                                props.setData("city", e.target.value)
                            }
                        />
                        <InputError
                            message={props.errors.city}
                            className="mt-2"
                        />
                    </div>

                    <div className="box col-span-3">
                        <label
                            htmlFor="region"
                            className="block text-sm font-medium text-gray-700"
                        >
                            State / Province
                        </label>
                        <input
                            type="text"
                            value={props.data.state}
                            className={`mt-1 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm `}
                            onChange={(e) =>
                                props.setData("state", e.target.value)
                            }
                        />
                        <InputError
                            message={props.errors.state}
                            className="mt-2"
                        />
                    </div>

                    <div className="box col-span-3">
                        <label
                            htmlFor="street-address"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Street address
                        </label>
                        <input
                            type="text"
                            value={props.data.street_name}
                            className={`mt-1 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm `}
                            onChange={(e) =>
                                props.setData("street_name", e.target.value)
                            }
                        />
                        <InputError
                            message={props.errors.street_name}
                            className="mt-2"
                        />
                    </div>

                    <div className="box col-span-3">
                        {" "}
                        <label
                            htmlFor="street-address"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Street number
                        </label>
                        <input
                            type="text"
                            value={props.data.street_number}
                            className={`mt-1 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm `}
                            onChange={(e) =>
                                props.setData("street_number", e.target.value)
                            }
                        />
                        <InputError
                            message={props.errors.street_number}
                            className="mt-2"
                        />
                    </div>

                    <div className="box col-span-3">
                        {" "}
                        <label
                            htmlFor="street-address"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Suite / apt / floor
                        </label>
                        <input
                            type="text"
                            value={props.data.suite}
                            className={`mt-1 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm `}
                            onChange={(e) =>
                                props.setData("suite", e.target.value)
                            }
                        />
                        <InputError
                            message={props.errors.suite}
                            className="mt-2"
                        />
                    </div>
                    <div className="box col-span-3">
                        <label
                            htmlFor="postal-code"
                            className="block text-sm font-medium text-gray-700"
                        >
                            ZIP / Postal code
                        </label>
                        <input
                            type="text"
                            value={props.data.postal_code}
                            className={`mt-1 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm `}
                            onChange={(e) =>
                                props.setData("postal_code", e.target.value)
                            }
                        />
                    </div>
                </div>

                <div className="flex flex-col text-right w-full pt-20">
                    <StepsFooter step={2} {...props} nextStep={submit} />
                </div>
            </form>
        </StepLayout>
    );
};

export default DeliveryInfoStep;
