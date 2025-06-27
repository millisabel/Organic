import { cva } from 'class-variance-authority';

const baseClasses = [
  'group',
  'inline-flex items-center justify-center whitespace-nowrap gap-2.5', // Layout
  'bg-white', // Background
  'rounded-2xl', // Border
  'text-primary font-roboto text-xl font-bold', // Typography
  'ring-offset-background', // Ring
  'shadow-md transition-all duration-200', // Effects
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
        'text-primary', // Text
        'shadow-none', // Effects
        'hover:bg-secondary hover:text-white', // Hover
      ],
    },
    size: {
      default: 'h-20 w-max min-w-[220px] px-4 py-2',
      'icon-lg': 'h-14 w-14 rounded-full flex-shrink-0',
      'icon-xl': 'h-[60px] w-[60px] rounded-full flex-shrink-0',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});
