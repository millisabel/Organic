import type { Config } from 'tailwindcss';
import { BREAKPOINTS } from './src/constants/breakpoints';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      screens: {
        xs: BREAKPOINTS.xs + 'px', // 375px
        sm: BREAKPOINTS.sm + 'px', // 640px
        md: BREAKPOINTS.md + 'px', // 768px
        lg: BREAKPOINTS.lg + 'px', // 1024px
        xl: BREAKPOINTS.xl + 'px', // 1280px
        '2xl': BREAKPOINTS['2xl'] + 'px', // 1440px
      },
      colors: {
        primary: {
          DEFAULT: '#274C5B',
        },
        secondary: {
          DEFAULT: '#7EB693',
          dark: '#026125',
          light: '#F1F8F4',
          surface: '#EFF6F1',
        },
        accent: {
          DEFAULT: '#EFD372',
          star: '#FFA858',
          red: '#ae0505',
          arrow: '#335B6B',
        },
        text: {
          DEFAULT: '#525C60',
          placeholder: '#ABABAB',
        },
        background: '#F9F8F8',
        // arrowFill: '#335B6B',
        // border: '#D4D4D4',
        // cream: '#F1EDEA',
      },
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        yellowtail: ['"Yellowtail"', 'cursive'],
      },
      fontSize: {
        base: ['18px', { lineHeight: '1.65', fontWeight: '400' }],
        small: ['15px', { lineHeight: 'inherit', fontWeight: '400' }],
        medium: ['20px', { lineHeight: 'inherit', fontWeight: '600' }],
        h1: ['3.125rem', { lineHeight: '1.2', fontWeight: '800' }],
        h2: ['2rem', { lineHeight: '1.3', fontWeight: '800' }],
        h3: ['1.5rem', { lineHeight: '1.4', fontWeight: '700' }],
      },
    },
  },
  plugins: [],
  safelist: [],
};

export default config;
