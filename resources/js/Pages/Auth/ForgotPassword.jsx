import InputError from "@/Components/Form/InputError";
import TextInput from "@/Components/Form/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";
import GuestLayout from "@/Layouts/Guest/GuestLayout";
import { Head, useForm } from "@inertiajs/inertia-react";

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("password.email"));
    };

    return (
        <GuestLayout>
            <Head title="Forgot Password" />
            <div>
                <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                    Forgot your password?
                </h2>
            </div>
            <div className="mb-4 text-sm text-gray-500 leading-normal">
                No worries. Just type in your email address and we will send you
                an email with a link to recover your account .
            </div>

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}

            <form onSubmit={submit}>
                <TextInput
                    type="text"
                    name="email"
                    value={data.email}
                    className="mt-1 block w-full"
                    isFocused={true}
                    handleChange={onHandleChange}
                />

                <InputError message={errors.email} className="mt-2" />

                <div className="flex items-center justify-end mt-4">
                    <button
                        className={`ml-4 btn btn-success btn-sm btn-wide ${
                            processing && "btn loading"
                        } `}
                    >
                        Send reset link
                    </button>
                </div>
            </form>
        </GuestLayout>
    );
}
