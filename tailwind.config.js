/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        opensans: ["Open Sans", "sans-serif"],
        oxanium: ["Oxanium", "sans-serif"], // Example for Eurostile alternative
      },
    },
  },
  plugins: [],
};
