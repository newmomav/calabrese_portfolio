/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      dropShadow: {
        '1xl': ['2px 2px 2px #cbd5e1'],
        '4xl': [
          '0 35px 35px rgba(0, 0, 0, 0.25)',
          '0 45px 65px rgba(0, 0, 0, 0.15)',
        ],
      },
      backgroundImage: {
        'hero-pattern': "url('./src/assets/IMG_9981.jpg')",
        'logo-calabrese': "url('./src/assets/Calabrese.svg')",
      },
      colors: {
        primary: '#e2e8f0',
        secondary: '#aaa6c3',
        tertiary: '#151030',
        fourth: '#334155',
        fifth: '#0f67e1',
        'black-100': '#100d25',
        'black-200': '#090325',
        'white-100': '#f3f3f3',
      },
      boxShadow: {
        card: '0px 35px 120px -15px #211e35',
      },
      screens: {
        xs: '450px',
      },
      textShadow: {
        burning:
          '2px 2px 3px #aaa6c3, -2px -2px 3px #FFF, 2px -2px 3px #FFF, -2px 2px 3px #FFF',
      },
    },
    fontFamily: {
      paranoia: ['paranoia'],
      calabrese: ['calabrese'],
      barlow: ['Barlow'],
    },
  },
  plugins: [],
};
