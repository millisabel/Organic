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
      colors: {
        primary: '#274C5B',
        secondary: '#7EB693',
        'secondary-light': '#F1F8F4',
        accent: '#EFD372',
        arrowFill: '#335B6B',
        background: '#F9F8F8',
        border: '#D4D4D4',
        error: '#E74C3C',
        white: '#FFF',
        'text-light': '#525C60',
        'placeholder-text': '#ABABAB',
        'social-bg': '#EFF6F1',
        'star-fill': '#FFA858',
      },
      screens: {
        xs: BREAKPOINTS.xs + 'px', // 375px
        sm: BREAKPOINTS.sm + 'px', // 640px
        md: BREAKPOINTS.md + 'px', // 768px
        lg: BREAKPOINTS.lg + 'px', // 1024px
        xl: BREAKPOINTS.xl + 'px', // 1280px
        '2xl': BREAKPOINTS['2xl'] + 'px', // 1440px
      },
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        yellowtail: ['"Yellowtail"', 'cursive'],
        opensans: ['"Open Sans"', 'Arial', 'sans-serif'],
      },
      fontSize: {
        base: ['18px', { lineHeight: '1.65', fontWeight: '400' }],
        h1: ['3.125rem', { lineHeight: 'inherit', fontWeight: '800' }],
        'section-title': ['2rem', { lineHeight: 'inherit', fontWeight: '800' }],
        'section-subtitle': ['1.5rem', { lineHeight: 'inherit', fontWeight: '400' }],
        'nav-link': ['20px', { lineHeight: 'inherit', fontWeight: '600' }],
        small: ['15x', { lineHeight: 'inherit', fontWeight: '400' }],
      },
      boxShadow: {
        card: '0px 0px 10px 2px  rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
  safelist: [],
};

export default config;
