import type { Config } from 'tailwindcss';

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
        accent: '#EFD372',
        arrowFill: '#335B6B',
        'social-bg': '#EFF6F1',
        background: '#F9F8F8',
        text: '#274C5B',
        'text-light': '#525C60',
        border: '#D4D4D4',
        error: '#E74C3C',
        white: '#FFF',
        'placeholder-text': '#ABABAB',
        'star-fill': '#FFA858',
      },
      screens: {
        xs: '375px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1440px',
      },
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        yellowtail: ['"Yellowtail"', 'cursive'],
        opensans: ['"Open Sans"', 'Arial', 'sans-serif'],
      },
      fontSize: {
        'text-base': ['18px', { lineHeight: '1.65', fontWeight: '400' }],
        h1: ['3.125rem', { lineHeight: 'inherit', fontWeight: '800' }],
        'section-title': ['2rem', { lineHeight: 'inherit', fontWeight: '800' }],
        'section-subtitle': ['1.5rem', { lineHeight: 'inherit', fontWeight: '400' }],
        'nav-link': ['20px', { lineHeight: 'inherit', fontWeight: '600' }],
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
