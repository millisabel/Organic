import { cva } from 'class-variance-authority';

const badgeBaseClasses = [
  'flex  items-center justify-center rounded-lg',
  'w-[100px] px-2 py-1',
  'bg-primary',
  'text-center text-white text-[10px] uppercase',
  'ring-1 ring-white ring-offset-1',
  'shadow-xl',
].join(' ');

export const statusBadgeVariants = cva(badgeBaseClasses, {
  variants: {
    variant: {
      default: ['bg-primary', 'text-white', 'ring-primary'],
      new: ['bg-gradient-to-t from-blue-200 to-blue-100', 'text-blue-600', 'ring-blue-200'],
      sale: ['bg-gradient-to-t from-red-200 to-red-100', 'text-red-600', 'ring-red-200'],
      inCart: ['bg-gradient-to-t from-green-200 to-green-100', 'text-green-600', 'ring-green-200'],
      outOfStock: ['bg-gradient-to-t from-gray-200 to-gray-100', 'text-gray-600', 'ring-gray-200'],
    },
  },
});
