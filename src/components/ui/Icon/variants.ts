import { cva } from 'class-variance-authority';

const iconBaseClasses = [
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
      default: 'w-8 h-8',
      xs: 'w-4 h-4',
      sm: 'w-5 h-5',
      md: 'w-6 h-6',
      lg: 'w-7 h-7',
    },
    rounded: {
      default: '',
      full: 'rounded-full',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
    rounded: 'default',
  },
});
