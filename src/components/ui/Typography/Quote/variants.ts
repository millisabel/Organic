import { cva } from 'class-variance-authority';

const defaultVariants = [
  'max-w-[100%] p-4 lg:p-20 my-12',
  'rounded-2xl',
  'text-roboto text-xl break-words',
  'text-primary',
  'text-center',
  'bg-accent-cream',
].join(' ');

export const quoteVariants = cva(defaultVariants, {
  variants: {
    variant: {
      default: '',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
