/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    backgroundImage: {
      bannerBg: 'url(../public/assets/home/mobile/image-header.jpg)',
      mdBannerBg: 'url(../public/assets/home/tablet/image-header.jpg)',
      lgBannerBg: 'url(../public/assets/home/desktop/image-hero.jpg)',
      zx7: 'url(../public/assets/home/mobile/image-speaker-zx7.jpg)',
      mdzx7: 'url(../public/assets/home/tablet/image-speaker-zx7.jpg)',
      lgzx7: 'url(../public/assets/home/desktop/image-speaker-zx7.jpg)',
      yx1: 'url(../public/assets/home/mobile/image-earphones-yx1.jpg)',
      mdyx1: 'url(../public/assets/home/tablet/image-earphones-yx1.jpg)',
      lgyx1: 'url(../public/assets/home/desktop/image-earphones-yx1.jpg)',
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
