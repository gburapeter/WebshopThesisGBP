import "./bootstrap";
import "../css/app.css";

import AuthenticatedLayout from "./Layouts/Authenticated/AuthenticatedLayout";
import React from "react";
import { render } from "react-dom";
import { createInertiaApp } from "@inertiajs/inertia-react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import route from "ziggy-js";
// Import generated ziggy.js
import { Ziggy } from '@/ziggy'





// ...

route('home', undefined, undefined, Ziggy);
const appName =
    window.document.getElementsByTagName("title")[0]?.innerText || "Laravel";
const AuthenticatedTemplate = (page) => <AuthenticatedLayout children={page} />;

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => {
        const page = resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob("./Pages/**/*.jsx")
        );



        page.then((module) => {
            if (!name.startsWith("Auth/")) {
                module.default.layout =
                    module.default.layout || AuthenticatedTemplate;
            }
        });
        return page;
    },
    setup({ el, App, props, }) {

        // global.route = (name, params, absolute, config = Ziggy) => route(name, params, absolute, config);
        return render(<App {...props} />, el);
    },
});
