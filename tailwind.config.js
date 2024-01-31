/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: `Poppins, sans-serif`,
      },
      colors: {
        undefined: "#152643",
        table: "#152643",
      },
    },
  },
  plugins: [require("preline/plugin"), require("tailwind-scrollbar")],
};
