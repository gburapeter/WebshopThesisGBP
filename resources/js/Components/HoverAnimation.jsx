import React from "react";

const HoverAnimation = ({ children }) => {
    return (
        <div className="group transition duration-500  ease-in-out relative">
            <div className="absolute bottom-0 left-0 w-full h-1 duration-700 origin-left transform scale-x-0 bg-indigo-500 group-hover:scale-x-100"></div>
            <div className="absolute bottom-0 left-0 w-1 h-full duration-700 origin-bottom transform scale-y-0 bg-indigo-500 group-hover:scale-y-100"></div>
            <div className="absolute top-0 left-0 w-full h-1 duration-700 origin-right transform scale-x-0 bg-indigo-500 group-hover:scale-x-100"></div>
            <div className="absolute bottom-0 right-0 w-1 h-full duration-700 origin-top transform scale-y-0 bg-indigo-500 group-hover:scale-y-100"></div>

            {children}
        </div>
    );
};

export default HoverAnimation;
