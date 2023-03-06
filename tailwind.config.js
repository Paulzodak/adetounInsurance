/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        borderGrey: "#DEE1E6FF",
        textGrey: "#BCC1CAFF",
        btnGreen: " #459D7AFF",
      },
      fontFamily: {
        inter: ["'Inter', sans-serif"],
      },
    },
  },
  plugins: [],
};
