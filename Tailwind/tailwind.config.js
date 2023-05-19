/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./Public/**/*.{html,js}'],
  darkMode:'class',
  theme: {
    extend: {
      fontFamily : {
        'inter' : ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}

