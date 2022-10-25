import { Link } from "@inertiajs/inertia-react";
import { itMatchesOne } from "daisyui/src/lib/postcss-prefixer/utils";
import React from "react";

const Pagination = ({ links }) => {
    return (
        <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
        >
            {links.map((item, index) => {
                return (
                    <Link key={index} href={item.url}>
                        <div
                            className={`relative inline-flex items-center border border-gray-200 px-4 py-2 text-sm font-medium text-gray-500 hover:bg-green-100 focus:z-20 ${
                                item.active ? "bg-primary " : ""
                            }`}
                        >
                            {index == 0 && (
                                <svg
                                    className="h-5 w-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            )}
                            {index == links.length - 1 && (
                                <svg
                                    className="h-5 w-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            )}
                            {index != 0 &&
                                index != links.length - 1 &&
                                item.label}
                        </div>
                    </Link>
                );
            })}
        </nav>
    );
};

export default Pagination;
