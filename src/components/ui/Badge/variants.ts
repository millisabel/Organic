import { cva } from 'class-variance-authority';

const badgeBaseClasses = [
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
      inCart: ['bg-green-100 border-[1px]', 'text-green-600'],
      outOfStock: ['bg-gray-200', 'text-gray-600'],
      sale: ['bg-red-200', 'text-red-600'],
      new: ['bg-gray-200', 'text-primary'],
    },
    size: {
      default: 'h-6 w-6',
      lg: 'h-8 w-8',
      xl: 'h-8 w-16 p-1',
    },
    font: {
      default: 'text-[10px] text-center uppercase font-semibold',
      lg: 'text-sm',
      xl: 'text-base',
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
});
