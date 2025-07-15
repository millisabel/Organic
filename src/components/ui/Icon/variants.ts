import { cva } from 'class-variance-authority';

const iconBaseClasses = [
  'group',
  'w-full h-full', // Layout
  'border-none', // Border
  'bg-transparent', // Background
  'text-inherit', // Typography
].join(' ');

export const iconVariants = cva(iconBaseClasses, {
  variants: {
    variant: {
      default: '',
      arrow: 'p-1 rounded-full bg-accent-arrow text-white',
      spinner: 'text-secondary animate-spin',
    },
    size: {
      sm: 'w-5 h-5',
      md: 'w-6 h-6',
      lg: 'w-8 h-8',
      xl: 'w-10 h-10',
    },
    rounded: {
      default: '',
      full: 'rounded-full',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
    rounded: 'default',
  },
});
