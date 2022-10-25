import React from "react";

const SearchBar = () => {
    return (
        <>
            {/* <form className="flex w-full  items-center">
                <div className="form-control w-full">
                    <div className="input-group">
                        <input
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered input-info w-full max-w-xs"
                        />
                        <button className="btn btn-square h-1/2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </form> */}
            <form className="flex w-full  items-center">
                <div class="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl">
                    <div class="md:flex">
                        <div class="w-96 ">
                            <div class="relative">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="w-6 h-6 absolute text-gray-400 top-4 left-4"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                    />
                                </svg>
                                <i class="absolute fa fa-search text-gray-400 top-5 left-4"></i>
                                <input
                                    type="text"
                                    class="bg-white h-14 w-full px-12 rounded-lg focus:outline-none hover:cursor-pointer"
                                    name=""
                                />
                                <span class="absolute top-4 right-5 border-l pl-4"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};

export default SearchBar;
