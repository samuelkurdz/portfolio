// const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['.src/pages/**/*.{js,ts,jsx,tsx}', '.src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      primary: 'var(--color-primary)',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
