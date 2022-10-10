import React, { useEffect, useState } from "react";

import TextInput from "@/Components/Form/TextInput";
import { Head, Link, useForm } from "@inertiajs/inertia-react";
import InputLabel from "@/Components/Form/InputLabel";

import InputError from "@/Components/Form/InputError";
import Checkbox from "@/Components/Form/Checkbox";
import PrimaryButton from "@/Components/PrimaryButton";
import GuestLayout from "@/Layouts/Guest/GuestLayout";
import { RegisterSteps } from "./components/RegisterSteps";
import { RegisterForm } from "./components/RegisterForm";
export default function Register() {
    const [personalInfoStep, setPersonalInfoStep] = useState(false);
    const [usernameStep, setUsernameStep] = useState(false);
    const [addressStep, setAddressStep] = useState(false);

    return (
        <GuestLayout
            leftContent={
                <RegisterSteps
                    personalInfoStep={personalInfoStep}
                    usernameStep={usernameStep}
                    addressStep={addressStep}
                />
            }
            rightContent={
                <RegisterForm
                    setPersonalInfoStep={setPersonalInfoStep}
                    setUsernameStep={setUsernameStep}
                    setAddressStep={setAddressStep}
                />
            }
        ></GuestLayout>
    );
}
