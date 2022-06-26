/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      backgroundImage: {
        'main-background': 'linear-gradient(180deg, #11101A 0%, #08080D 50%, #000000 100%)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
