/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./styles/*.css",
    "./components/**/*.css",
    "./components/**/*.stories.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3a0ca3",
        secondary: "#560bad",
        tertiary: "#7209b7",
        tertiary_lighter: "#a061ca",
        gray: "rgb(129, 129, 129, 0.2)",
      },
    },
  },
  plugins: [],
};
