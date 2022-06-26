/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      backgroundImage: {
        'landing-background': 'linear-gradient(180deg, #11101A 0%, #08080D 50%, #000000 100%)',
        'login-background': 'linear-gradient(187.16deg, #181623 0.07%, #191725 51.65%, #0D0B14 98.75%)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
