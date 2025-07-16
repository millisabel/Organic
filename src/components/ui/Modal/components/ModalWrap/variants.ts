import { cva } from 'class-variance-authority';

const modalClassName = [
  'fixed z-50',
  'w-full h-full',
  'inset-0',
  'flex items-center justify-center',
  'bg-black/50',
  'backdrop-blur-sm',
].join(' ');

export const modalVariants = cva(modalClassName, {
  variants: {
    variant: {
      default: '',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
