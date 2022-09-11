/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/components/**/*.{js, ts, jsx, tsx, vue}",
        "./src/pages/**/*.html",
        "./index.html",
    ],
    plugins: [
        require("@tailwindcss/typography"),
        require("@tailwindcss/forms"),
        require("@tailwindcss/line-clamp"),
    ],
};
