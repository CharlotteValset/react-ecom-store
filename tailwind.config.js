/** @type {import('tailwindcss').Config} */

const flowbite = require("flowbite-react/tailwind");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./node_modules/flowbite/**/*.js", flowbite.content()],
  theme: {
    extend: {
      colors: {
        "background-white": "#FBFBFB",
        "purple-pink": "#a00e8c;",
        "light-pink": "#e2d5e2",
        "dark-pink": "#9E5269",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
