import { cva } from 'class-variance-authority';

const defaultModalBodyClassName = [
  'relative',
  'flex flex-col items-center justify-center',
  'min-w-[300px] min-h-[300px] p-8',
  'rounded-lg',
  'shadow-xl',
].join(' ');

export const modalBodyVariants = cva(defaultModalBodyClassName, {
  variants: {
    variant: {
      default: 'bg-background',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
