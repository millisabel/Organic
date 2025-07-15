import { cva } from 'class-variance-authority';

export const inputFieldVariants = cva('flex flex-col gap-2', {
  variants: {
    variant: {
      default: '',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
