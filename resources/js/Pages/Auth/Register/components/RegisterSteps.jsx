import React, { useEffect } from "react";

export const RegisterSteps = ({
    personalInfoStep,
    usernameStep,
    addressStep,
}) => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid max-w-2xl mx-auto">
                <div className="flex">
                    <div className="flex flex-col items-center mr-6">
                        <div className="w-px h-10 opacity-0 sm:h-full" />
                        <div>
                            <div
                                className={`flex items-center justify-center w-8 h-8 text-xs font-medium border border-black rounded-full ${
                                    personalInfoStep ? "bg-green-400" : ""
                                } `}
                            >
                                1
                            </div>
                        </div>
                        <div className="w-px h-full bg-gray-300" />
                    </div>
                    <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
                        <div className="sm:mr-5">
                            <div
                                className={`flex items-center justify-center ${
                                    personalInfoStep ? "bg-green-400" : ""
                                } w-16 h-16 my-3 rounded-full bg-indigo-50 sm:w-24 sm:h-24`}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-8 h-8"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div>
                            <p className="text-xl font-semibold sm:text-base">
                                Personal information
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex">
                    <div className="flex flex-col items-center mr-6">
                        <div className="w-px h-10 bg-gray-300 sm:h-full" />
                        <div>
                            <div
                                className={`flex items-center justify-center w-8 h-8 text-xs font-medium border border-black rounded-full ${
                                    usernameStep ? "bg-green-400" : ""
                                } `}
                            >
                                2
                            </div>
                        </div>
                        <div className="w-px h-full bg-gray-300" />
                    </div>
                    <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
                        <div className="sm:mr-5">
                            <div
                                className={`flex items-center justify-center ${
                                    usernameStep ? "bg-green-400" : ""
                                } w-16 h-16 my-3 rounded-full bg-indigo-50 sm:w-24 sm:h-24`}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="w-8 h-8"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div>
                            <p className="text-xl font-semibold sm:text-base">
                                User account
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex">
                    <div className="flex flex-col items-center mr-6">
                        <div className="w-px h-10 bg-gray-300 sm:h-full" />
                        <div>
                            <div
                                className={`flex items-center justify-center w-8 h-8 text-xs font-medium border border-black rounded-full ${
                                    addressStep ? "bg-green-400" : ""
                                } `}
                            >
                                3
                            </div>
                        </div>
                        <div className="w-px h-full opacity-0" />
                    </div>
                    <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
                        <div className="sm:mr-5">
                            <div
                                className={`flex items-center justify-center ${
                                    addressStep ? "bg-green-400" : ""
                                } w-16 h-16 my-3 rounded-full bg-indigo-50 sm:w-24 sm:h-24`}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-8 h-8"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div>
                            <p className="text-xl font-semibold sm:text-base">
                                Address
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
