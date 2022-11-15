import React from "react";

const StatisticsCard = ({ stats }) => {
    return (
        <div className="text-center">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
                {stats.icon}
            </div>
            <h6 className="text-4xl font-bold text-indigo-400">
                {stats.number}
            </h6>
            <p className="mb-2 font-bold text-md">{stats.label}</p>
            <p className="text-gray-700">{stats.description}</p>
        </div>
    );
};

export default StatisticsCard;
