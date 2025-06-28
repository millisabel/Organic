import { cva } from 'class-variance-authority';

const badgeBaseClasses = [
  'absolute top-0 right-0',
  'flex h-5 w-5 items-center justify-center rounded-full ',
  'bg-primary',
  'text-xs font-bold text-white',
  'border-2 border-white',
].join(' ');

export const badgeVariants = cva(badgeBaseClasses, {
  variants: {
    variant: {
      default: ['bg-primary', 'text-white', 'border-2 border-white'],
      cart: [
        'absolute -top-2 -right-2', // Position
        'bg-green-600', // Background
        'text-white', // Text
        'border-2 border-white', // Border
      ],
    },
    size: {
      default: 'h-6 w-6',
      lg: 'h-8 w-8',
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
});
