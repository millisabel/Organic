import { cva } from 'class-variance-authority';

const iconBaseClasses = [
  'group',
  'relative', // Position
  'w-full', // Layout
  'border-none', // Border
  'bg-transparent', // Background
  'text-inherit', // Typography
  'transition-all duration-500 ease-in-out', // Effects
  'group-hover:scale-125', // Hover
  '', // Focus
].join(' ');

export const iconVariants = cva(iconBaseClasses, {
  variants: {
    variant: {
      default: '',
      arrow: 'p-1 rounded-full bg-arrowFill text-white',
      spinner: 'text-secondary animate-spin',
      local: 'group-hover:scale-none group-hover/local:scale-125',
      noHover: 'group-hover:scale-none',
    },
    size: {
      sm: 'w-5 h-5',
      md: 'w-6 h-6',
      lg: 'w-8 h-8',
      xl: 'w-10 h-10',
      round: 'rounded-full',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
});
