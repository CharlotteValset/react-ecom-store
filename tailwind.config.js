/** @type {import('tailwindcss').Config} */

const flowbite = require("flowbite-react/tailwind");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./node_modules/flowbite/**/*.js", flowbite.content()],
  theme: {
    extend: {
      colors: {
        "background-white": "#FBFBFB",
        purple: "#E7CEFF",
        "light-pink": "#e2d5e2",
        "dark-pink": "#9E5269",
        "blue-gray": "#7581AF",
        "coral-pink": "#FFE8EF",
        "light-yellow": "#FFFFD2",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
