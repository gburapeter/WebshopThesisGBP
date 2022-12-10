import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command, mode, ssrBuild }) => {
    return {
        plugins: [
            laravel({
                input: "resources/js/app.jsx",
                refresh: true,
            }),
            react(),
        ],
        base: command === "serve" ? "" : "/build/",
        publicDir: false,
        build: {
            manifest: true,
            outDir: "public/build",
            rollupOptions: {
                input: "resources/js/app.jsx",
            },
        },
    };
});
