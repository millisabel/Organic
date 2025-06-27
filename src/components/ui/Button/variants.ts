import { cva } from 'class-variance-authority';

const baseClasses = [
  'group',
  'inline-flex items-center justify-center whitespace-nowrap gap-2.5 rounded-2xl', // Layout
  'bg-Transparent', // Background
  'text-primary font-roboto text-xl font-bold', // Typography
  'ring-offset-background', // Ring
  'shadow-md transition-all duration-300', // Effects
  'hover:shadow-lg hover:-translate-y-0.5', // Hover
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2', // Focus
  'disabled:pointer-events-none disabled:opacity-50', // Disabled
].join(' ');

export const buttonVariants = cva(baseClasses, {
  variants: {
    variant: {
      default: [
        'bg-primary', // Background
        'text-white', // Text
        'hover:bg-accent hover:text-primary', // Hover
      ],
      destructive: [
        'bg-primary', // Background
        'border-2 border-transparent', // Border
        'text-white', // Text
        'hover:bg-white hover:text-primary hover:border-primary', // Hover
      ],
      outline: [
        'bg-background', // Background
        'border-2 border-primary', // Border
        'text-primary', // Text
        'hover:bg-primary hover:text-white', // Hover
      ],
      secondary: [
        'bg-secondary', // Background
        'text-white', // Text
        'hover:bg-primary', // Hover
      ],
      accent: [
        'bg-accent', // Background
        'text-primary', // Text
        'hover:bg-primary hover:text-accent', // Hover
      ],
      social: [
        'bg-social-bg', // Background
        'shadow-none', // Effects
        'hover:bg-secondary', // Hover
      ],
      menu: [
        'bg-transparent', // Background
        'border-2', // Border
        'shadow-none', // Effects
        'hover:bg-accent hover:text-accent',
      ],
      cart: [
        'bg-primary', // Background
        'shadow-none', // Effects
        'hover:bg-accent hover:text-white', // Hover
      ],
      search: [
        'bg-secondary', // Background
        'shadow-none', // Effects
        'hover:bg-accent hover:text-white', // Hover
      ],
    },
    size: {
      default: 'h-20 w-max min-w-[220px] px-4 py-2',
      round: 'h-14 w-14 rounded-full flex-shrink-0 hover:translate-y-0',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});
