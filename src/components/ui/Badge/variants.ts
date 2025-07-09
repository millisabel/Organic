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
        'absolute -top-2 -right-2 z-100', // Position
        'bg-green-600', // Background
        'text-white', // Text
        'border-2 border-white', // Border
      ],
      inCart: ['bg-green-100', 'text-green-600', 'shadow-[0_0_2px_0_green]'],
      outOfStock: ['bg-gray-200', 'text-gray-600', 'shadow-[0_0_2px_0_gray]'],
      sale: ['bg-red-200', 'text-red-600', 'shadow-[0_0_2px_0_red]'],
      new: ['bg-gray-200', 'text-primary', 'shadow-[0_0_2px_0_gray]'],
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
