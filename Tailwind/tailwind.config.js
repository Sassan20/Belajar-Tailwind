/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./Public/**/*.{html,js}'],
  darkMode:'class',
  theme: {
    extend: {
      fontFamily : {
        'inter' : ['Inter', 'sans-serif']
      },
      animation : {
        'spin-slow' : 'spin 3s linear infinite',
        'gempa' : 'gempa 1s linear infinite'
      },
      keyframes : {
        gempa : {
          '0%, 100%' : {transform : 'rotate(-3deg)'},
          '50%' : {transform: 'rotate(3deg)'}
        }
      }
    },
  },
  plugins: [],
}

