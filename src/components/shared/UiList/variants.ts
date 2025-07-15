import { cva } from 'class-variance-authority';

export const uiListVariants = cva('flex flex-col gap-4', {
  variants: {
    variant: {
      default: '',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
