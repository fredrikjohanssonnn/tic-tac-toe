/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ['Outfit', 'sans-serif']
    },
    extend: {
      colors: {
        'primary': {
          100: '#1F3641',
          200: '#1A2A33'
        },
        'secondary': {
          100: '#65E9E4',
          200: '#31C3BD'
        },
        'tertiary': {
          100: '#FFC860',
          200: '#F2B137'
        },
        'quaternary': {
          100: '#DBE8ED',
          200: '#A8BFC9'
        }
      },
    },
  },
  plugins: [],
}