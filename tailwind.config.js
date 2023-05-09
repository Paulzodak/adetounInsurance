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
        mainPurple: "#373CB1",
        textGrey: "#5A5A5A",
        btnGreen: " #459D7AFF",
        bgGrey: "#F3F4F6FF",
        lightBtnGreen: "#F4FAF8FF",
        white: "white",
        borderGrey: "#E5E5E5",
      },
      fontFamily: {
        nunito: ["'Nunito', sans-serif"],
      },
      backgroundImage: {
        hero: "url('/assets/home/hero.jpg')",
        shopHero: "url('/assets/shop/hero.jpg')",
        // "footer-texture": "url('/img/footer-texture.png')",
      },
      spacing: {
        fluidWidth: "20rem",
        fluidWidthSm: "35rem",
        fluidWidthMd: "40rem",
      },
      backgroundImage: {},
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
