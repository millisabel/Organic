import { cva } from 'class-variance-authority';

const labelVariants = cva('block text-sm font-medium text-gray-700', {
  variants: {
    variant: {
      default: '',
      hidden: 'hidden',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export { labelVariants };
