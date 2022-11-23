import React from "react";

const SearchBar = () => {
    return (
        <>
            <form className="flex w-full  items-center">
                <div className="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl">
                    <div className="md:flex">
                        <div className="w-96 ">
                            <div className="relative">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6 absolute text-gray-400 top-4 left-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                    />
                                </svg>

                                <input
                                    type="text"
                                    className="bg-white h-14 w-full px-12 rounded-lg focus:outline-none hover:cursor-pointer"
                                    name=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};

export default SearchBar;
