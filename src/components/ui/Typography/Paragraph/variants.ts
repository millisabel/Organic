import { cva } from 'class-variance-authority';

const defaultVariants = ['text-text text-left text-base'].join(' ');

export const paragraphVariants = cva(defaultVariants, {
  variants: {
    variant: {
      default: '',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
