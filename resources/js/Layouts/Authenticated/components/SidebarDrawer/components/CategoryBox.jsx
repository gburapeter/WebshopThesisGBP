import React from "react";

export const CategoryBox = ({
    uniqueID,
    category,
    category_name,
    image_path,
}) => {
    return (
        <>
            <div className="group pl-2  transition duration-500 hover:scale-125 ease-in-out relative">
                <a href={route("categories.show", [category])}>
                    <div className="mt-6 rounded-lg relative shadow-lg shadow-indigo-500/40 overflow-hidden ">
                        <div className="absolute bottom-0 left-0 w-full h-1 duration-500 origin-left transform scale-x-0 bg-indigo-600 group-hover:scale-x-100"></div>
                        <div className="absolute bottom-0 left-0 w-1 h-full duration-500 origin-bottom transform scale-y-0 bg-indigo-600 group-hover:scale-y-100"></div>
                        <div className="absolute top-0 left-0 w-full h-1 duration-500 origin-right transform scale-x-0 bg-indigo-600 group-hover:scale-x-100"></div>
                        <div className="absolute bottom-0 right-0 w-1 h-full duration-500 origin-top transform scale-y-0 bg-indigo-600 group-hover:scale-y-100"></div>
                        <img
                            src={image_path}
                            alt="asd"
                            className="rounded object-cover w-64 h-32 border border-gray-300 "
                        />
                    </div>
                    <h3 className="mt-2 text-center font-extrabold text-md text-black">
                        <span className="" />
                        {category_name}
                    </h3>
                </a>
            </div>
        </>
    );
};
