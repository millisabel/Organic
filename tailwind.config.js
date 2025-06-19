/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#274C5B',
        secondary: '#7EB693',
        accent: '#EFD372',
        background: '#F9F8F8',
        text: '#274C5B',
        'text-light': '#525C60',
        border: '#D4D4D4',
        error: '#E74C3C',
        white: '#FFF',
      },
      screens: {
        xs: '375px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      fontFamily: {
        roboto: ['"Roboto"', 'Arial', 'sans-serif'],
        yellowtail: ['"Yellowtail"', 'cursive'],
        opensans: ['"Open Sans"', 'Arial', 'sans-serif'],
      },
      fontSize: {
        'text-base': ['18px', { lineHeight: '1.65', fontWeight: '400' }],
        h1: ['70px', { lineHeight: 'inherit', fontWeight: '800' }],
        'section-title': ['50px', { lineHeight: 'inherit', fontWeight: '800' }],
        'section-subtitle': ['36px', { lineHeight: 'inherit', fontWeight: '400' }],
        'nav-link': ['20px', { lineHeight: 'inherit', fontWeight: '600' }],
      },
    },
  },
  plugins: [],
};
