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
        "dark-gray": "#1F2020",
      },
      screens: {
        sm: "616px",
        md: "725px",
        // => @media (min-width: 576px) { ... }
      },
    },
  },
  plugins: [flowbite.plugin()],
};
