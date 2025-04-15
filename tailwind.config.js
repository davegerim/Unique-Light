/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        tahiti: {
          100: "#65081c",
          200: "#65081c",
          300: "#65081c",
          400: "#65081c",
          500: "#65081c",
          600: "#750d28",
          700: "#65081c",
          800: "#65081c",
          900: "#4f071a",
          950: "#0d4049",
        },
        // ...
      },
    },
  },
};
