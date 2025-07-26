import { cva } from 'class-variance-authority';

export const badgeStateOptions = ['default', 'new', 'sale', 'inCart', 'outOfStock'];

export const statusBadgeVariants = cva('', {
  variants: {
    state: {
      default: ['bg-primary', 'text-white', 'ring-primary'],
      new: [
        'bg-blue-200',
        'bg-gradient-to-t from-blue-200 to-blue-100',
        'text-blue-600',
        'ring-blue-200',
      ],
      sale: [
        'bg-red-200',
        'bg-gradient-to-t from-red-200 to-red-100',
        'text-red-600',
        'ring-red-200',
      ],
      inCart: [
        'bg-green-200',
        'bg-gradient-to-t from-green-200 to-green-100',
        'text-green-600',
        'ring-green-200',
      ],
      outOfStock: [
        'bg-gray-200',
        'bg-gradient-to-t from-gray-200 to-gray-100',
        'text-gray-600',
        'ring-gray-200',
      ],
    },
  },
});
