import { usePage } from "@inertiajs/inertia-react";
import React from "react";
import NotificationListItem from "./NotificationListItem";

const NotificationList = () => {
    const { notifications } = usePage().props;

    return (
        <div className="mx-auto w-full max-w-5xl bg-white">
            <h3 className="mt-4 text-xl text-center font-bold text-gray-900">
                Notifications
            </h3>
            <ul className="flex flex-col mt-4">
                {notifications.map((notification, index) => (
                    <NotificationListItem
                        key={index}
                        notification={notification}
                    />
                ))}
                {!notifications.length && (
                    <div className="mt-40 border">
                        {" "}
                        <h1 className="px-4 pt-8 pb-4 text-center text-3xl font-bold leading-10 text-indigo-500">
                            Oops!{" "}
                        </h1>
                        <p className="px-4 pb-10 text-base leading-none text-center text-gray-600">
                            Looks like you have no new notifications
                        </p>
                    </div>
                )}
            </ul>
        </div>
    );
};

export default NotificationList;
