import { cva } from 'class-variance-authority';

export const uiListOptions = ['default', 'row', 'grid'];

export const uiListVariants = cva('flex flex-col gap-4', {
  variants: {
    variant: {
      default: '',
      row: 'flex-row justify-between',
      grid: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
