import { useEffect } from "react";
import InputLabel from "@/Components/Form/InputLabel";
import TextInput from "@/Components/Form/TextInput";
import { Head, Link, useForm } from "@inertiajs/inertia-react";
import InputError from "@/Components/Form/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
export const RegisterForm = ({
    setPersonalInfoStep,
    setUsernameStep,
    setAddressStep,
}) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        firstname: "",
        lastname: "",
        phone: "",
        email: "",
        password: "",
        password_confirmation: "",
        country: "",
        street_name: "",
        street_number: "",
        city: "",
        state: "",
        postal_code: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    useEffect(() => {
        console.log(data.country);
        data.firstname != "" && data.lastname != "" && data.phone != ""
            ? setPersonalInfoStep(true)
            : setPersonalInfoStep(false);

        data.email != "" &&
        data.password != "" &&
        data.password_confirmation != ""
            ? setUsernameStep(true)
            : setUsernameStep(false);

        data.country != "" &&
        data.street_name != "" &&
        data.street_number != "" &&
        data.city != "" &&
        data.state != "" &&
        data.postal_code != ""
            ? setAddressStep(true)
            : setAddressStep(false);
    }, [data]);

    const submit = (e) => {
        e.preventDefault();

        post(route("register"));
    };
    return (
        <div className="mt-10">
            <Head title="Register" />
            <div className="mt-10 md:col-span-2 md:mt-0">
                <form onSubmit={submit} method="POST">
                    <div className="overflow-hidden shadow sm:rounded-md">
                        <div className="bg-white px-4 py-5 sm:p-6">
                            <div className="grid grid-cols-6 gap-4 ">
                                <div className="col-span-3 sm:col-span-3">
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

                                <div className="col-span-3 sm:col-span-3">
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

                                <div className="col-span-4 sm:col-span-4 ">
                                    <InputLabel
                                        forInput="phone"
                                        value="Phone"
                                    />

                                    <input
                                        type="text"
                                        value={data.phone}
                                        className={`mt-1 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm `}
                                        onChange={(e) =>
                                            setData("phone", e.target.value)
                                        }
                                    />

                                    <InputError
                                        message={errors.phone}
                                        className="mt-2"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:p-6">
                            <div className="grid grid-cols-6 gap-4 ">
                                <div className="col-span-4 sm:col-span-4">
                                    <InputLabel
                                        forInput="email"
                                        value="Email"
                                    />

                                    <input
                                        type="text"
                                        value={data.email}
                                        className={`mt-1 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm `}
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                    />

                                    <InputError
                                        message={errors.email}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="col-span-3 sm:col-span-3">
                                    <InputLabel
                                        forInput="password"
                                        value="Password"
                                    />

                                    <input
                                        type="text"
                                        value={data.password}
                                        className={`mt-1 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm `}
                                        onChange={(e) =>
                                            setData("password", e.target.value)
                                        }
                                    />

                                    <InputError
                                        message={errors.password}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="col-span-3 sm:col-span-3">
                                    <InputLabel
                                        forInput="password_confirmation"
                                        value="Confirm Password"
                                    />

                                    <input
                                        type="text"
                                        value={data.password_confirmation}
                                        className={`mt-1 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm `}
                                        onChange={(e) =>
                                            setData(
                                                "password_confirmation",
                                                e.target.value
                                            )
                                        }
                                    />

                                    <InputError
                                        message={errors.password_confirmation}
                                        className="mt-2"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="bg-white px-4 py-5 sm:p-6">
                            <div className="grid grid-cols-6 gap-4 ">
                                <div className="col-span-6 sm:col-span-6">
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
                                        onChange={(e) =>
                                            setData("country", e.target.value)
                                        }
                                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    >
                                        <option>United States</option>
                                        <option>Canada</option>
                                        <option>Mexico</option>
                                    </select>
                                    <InputError
                                        message={errors.country}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="col-span-4 sm:col-span-4">
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
                                            setData(
                                                "street_name",
                                                e.target.value
                                            )
                                        }
                                    />
                                    <InputError
                                        message={errors.street_name}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="col-span-2 sm:col-span-2">
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
                                            setData(
                                                "street_number",
                                                e.target.value
                                            )
                                        }
                                    />
                                    <InputError
                                        message={errors.street_number}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="col-span-6 sm:col-span-6 lg:col-span-2">
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
                                        onChange={(e) =>
                                            setData("city", e.target.value)
                                        }
                                    />
                                    <InputError
                                        message={errors.city}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
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
                                        onChange={(e) =>
                                            setData("state", e.target.value)
                                        }
                                    />
                                    <InputError
                                        message={errors.state}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
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
                                            setData(
                                                "postal_code",
                                                e.target.value
                                            )
                                        }
                                    />
                                    <InputError
                                        message={errors.postal_code}
                                        className="mt-2"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                            <button
                                type="submit"
                                className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};
