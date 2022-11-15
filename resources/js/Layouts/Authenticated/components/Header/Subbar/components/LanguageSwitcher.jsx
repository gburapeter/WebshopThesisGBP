import React from "react";

const LanguageSwitcher = () => {
    return (
        <div className="border-t  border-gray-200 py-6 px-4">
            <a
                href="#"
                className="-m-2 flex btn-ghost hover:bg-indigo-200 rounded items-center p-2"
            >
                <img
                    src="https://tailwindui.com/img/flags/flag-canada.svg"
                    alt=""
                    className="block h-auto w-5 flex-shrink-0"
                />
                <span className="ml-3 block text-base font-medium text-gray-900">
                    CAD
                </span>
                <span className="sr-only">, change currency</span>
            </a>
        </div>
    );
};

export default LanguageSwitcher;
