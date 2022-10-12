import React from "react";

const Header = ({ title, message }) => {
    return (
        <div>
            <header className="bg-transparent shadow ">
                <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                        {title} {message}
                    </h1>
                </div>
            </header>
        </div>
    );
};

export default Header;
