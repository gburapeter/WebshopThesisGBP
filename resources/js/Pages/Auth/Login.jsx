import React, { useEffect } from "react";

import { Head, Link, useForm } from "@inertiajs/inertia-react";
import InputLabel from "@/Components/Form/InputLabel";
import TextInput from "@/Components/Form/TextInput";
import InputError from "@/Components/Form/InputError";
import Checkbox from "@/Components/Form/Checkbox";
import PrimaryButton from "@/Components/PrimaryButton";
import GuestLayout from "@/Layouts/Guest/GuestLayout";
import ApplicationLogo from "@/Components/ApplicationLogo";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: "",
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <GuestLayout
            leftContent={<LoginImage />}
            rightContent={
                <LoginForm
                    status={status}
                    canResetPassword={canResetPassword}
                />
            }
        ></GuestLayout>
    );
}

const LoginImage = () => {
    return (
        <img
            alt="Pattern"
            src="https://media.istockphoto.com/photos/online-shopping-and-payment-man-using-tablet-with-shopping-cart-icon-picture-id1206800961?b=1&k=20&m=1206800961&s=612x612&w=0&h=ifVzX5ZKHd6yEr5pJabNLId39gQusitJHvKn1OcjJqY="
            class="absolute inset-0 h-full w-full object"
        />
    );
};

const LoginForm = ({ status, canResetPassword }) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: "",
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };
    return (
        <div class="">
            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}
            <ApplicationLogo title="Home" />

            <h1 class="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Welcome to our webshop!
            </h1>

            <p class="mt-4 mb-4 leading-relaxed text-gray-500">
                Please login down below or press{" "}
                <Link
                    href={route("register")}
                    className="underline text-sm text-gray-600 hover:text-gray-900"
                >
                    here
                </Link>{" "}
                to register
            </p>
            <form onSubmit={submit}>
                <div>
                    <InputLabel forInput="email" value="Email" />

                    <TextInput
                        type="text"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        handleChange={onHandleChange}
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel forInput="password" value="Password" />

                    <TextInput
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                        handleChange={onHandleChange}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="block mt-4">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            value={data.remember}
                            handleChange={onHandleChange}
                        />

                        <span className="ml-2 text-sm text-gray-600">
                            Remember me
                        </span>
                    </label>
                </div>

                <div className="flex items-center justify-end mt-4">
                    {canResetPassword && (
                        <Link
                            href={route("password.request")}
                            className="underline text-sm text-gray-600 hover:text-gray-900"
                        >
                            Forgot your password?
                        </Link>
                    )}

                    <button
                        className={`ml-4 btn btn-success btn-sm ${
                            processing && "btn loading"
                        } `}
                    >
                        Log In
                    </button>
                </div>
            </form>
        </div>
    );
};
