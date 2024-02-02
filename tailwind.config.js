/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: `Poppins, sans-serif`,
      },
      colors: {
        body: "#",
        footer: "#B6FFFA",
        item1: "#ffff",
        item2: "#687EFF",
        item3: "#EEEEEE",
        undefined: "#152643",
        table: "#152643",
      },
    },
  },
  plugins: [
    require("preline/plugin"),
    require("tailwind-scrollbar"),
    require("flowbite/plugin"),
  ],
};
