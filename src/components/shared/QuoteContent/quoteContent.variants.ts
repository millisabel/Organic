import { cva } from 'class-variance-authority';

export const quoteVariants = cva('', {
  variants: {
    size: {
      default: 'p-20 my-12',
    },
    border: {
      default: '',
      rounded: 'rounded-2xl',
    },
    font: {
      default: 'text-roboto text-xl',
    },
    color: {
      default: 'text-primary',
    },
    align: {
      center: 'text-center',
    },
    bg: {
      default: 'bg-cream',
    },
  },
  defaultVariants: {
    size: 'default',
    font: 'default',
    border: 'default',
    color: 'default',
    align: 'center',
    bg: 'default',
  },
});
