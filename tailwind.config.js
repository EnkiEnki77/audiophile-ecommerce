/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      brown: '#D87D4A',
      brown2: '#fbaf85',
      black: '#101010',
      black2: '#000000',
      grey: '#F1F1F1',
      grey2: '#FAFAFA',
      bordercol: '#CFCFCF',
      white: '#FFFFFF'
    }, 

    fontFamily: {
      manrope: ['Manrope', 'sans-serif'],
    },

    extend: {
      
    },
  },
  plugins: [],
}
