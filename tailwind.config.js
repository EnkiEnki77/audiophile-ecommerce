/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    backgroundImage: {
      bannerBg: 'url(../public/assets/home/mobile/image-header.jpg)',
      zx7: 'url(../public/assets/home/mobile/image-speaker-zx7.jpg)',
      yx1: 'url(../public/assets/home/mobile/image-earphones-yx1.jpg)',
      circles: 'url(../public/assets/home/desktop/pattern-circles.svg)'
    },

    colors: {
      brown: '#D87D4A',
      brown2: '#fbaf85',
      black: '#101010',
      black2: '#000000',
      grey: '#F1F1F1',
      grey2: '#FAFAFA',
      bordercol: '#CFCFCF',
      white: '#FFFFFF',
      transparent: 'transparent'
    }, 

    fontFamily: {
      manrope: ['Manrope', 'sans-serif'],
    },

    extend: {
      
    },
  },
  plugins: [],
}
