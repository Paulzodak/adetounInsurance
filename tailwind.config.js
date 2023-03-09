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
        bgGrey: "#F3F4F6FF",
      },
      fontFamily: {
        inter: ["'Inter', sans-serif"],
      },
      backgroundImage: {
        hero: "url('../assets/home/hero.jpg')",
        // "footer-texture": "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
