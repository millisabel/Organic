import { cva } from 'class-variance-authority';

export const paragraphVariants = cva('text-primary text-center text-xl', {
  variants: {
    size: {
      default: 'my-2',
    },
    font: {
      default: 'text-base text-text',
    },
    color: {
      default: 'text-text',
    },
    align: {
      center: 'text-center',
      left: 'text-left',
      right: 'text-right',
    },
  },
  defaultVariants: {
    size: 'default',
    font: 'default',
    color: 'default',
    align: 'left',
  },
});
