import { plugin } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
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
    },
    fontFamily: {
      paranoia: ['paranoia-calabrese'],
      calabrese: ['calabrese', 'abel'],
      abel: ['abel'],
      schnorkelei: ['schnorkelei', 'abel'],
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.blend-multiply': {
          'mix-blend-mode': 'multiply',
        },
        '.textShadow-light': {
          'text-shadow':
            '2px 2px 3px #aaa6c3, -2px -2px 3px #FFF, 2px -2px 3px #FFF, -2px 2px 3px #FFF',
        },
        '.textShadow-dark': {
          'text-shadow':
            ' 2px 2px 3px #000, -2px -2px 3px #333, 2px -2px 3px #333, -2px 2px 3px #333',
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};
