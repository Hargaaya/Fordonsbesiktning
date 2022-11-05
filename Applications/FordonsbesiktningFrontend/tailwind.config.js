/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./styles/*.css"],
  theme: {
    extend: {
      colors: {
        primary: "#3a0ca3",
        secondary: "#560bad",
        tertiary: "#7209b7",
        tertiary_lighter: "#a061ca",
      },
    },
  },
  plugins: [],
};
