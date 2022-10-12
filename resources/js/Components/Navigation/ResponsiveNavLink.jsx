import React from "react";
import { Link } from "@inertiajs/inertia-react";

export default function ResponsiveNavLink({
    method = "get",
    as = "a",
    href,
    active = false,
    children,
}) {
    return (
        <Link
            method={method}
            as={as}
            href={href}
            className={`px-3 py-2 rounded-md text-sm font-medium  ${
                active ? "bg-primary " : " hover:bg-primary hover:text-black"
            }`}
        >
            {children}
        </Link>
    );
}
