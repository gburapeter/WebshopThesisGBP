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
            </ul>
        </div>
    );
};

export default NotificationList;
