const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      primary: colors.blue['800'],
      'primary-dark': colors.pink['600']
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
