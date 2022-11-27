/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.tsx",
    "./index.html",
    "./src/components/*.tsx",
    "./src/components/**/*.tsx",
    "./src/assets/icons/**/*.svg",
  ],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        hero: "url('/background-hero-purple.png')",
      },
    },
  },
  plugins: [],
};
