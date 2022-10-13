import React from "react";

const SearchBar = () => {
    return (
        <>
            <form className="flex w-full  items-center">
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
            </form>
        </>
    );
};

export default SearchBar;
