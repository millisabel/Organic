import { cva } from 'class-variance-authority';

const defaultModalBodyClassName = [
  'relative',
  'flex flex-col items-center justify-center',
  'min-w-[300px] min-h-[300px] max-w-[60%] max-h-[90%] p-8',
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
