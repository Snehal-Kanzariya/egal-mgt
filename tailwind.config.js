/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0px 4px 30px rgba(0, 0, 0, 0.1);",
      },
    },
  },
  plugins: [],
};
