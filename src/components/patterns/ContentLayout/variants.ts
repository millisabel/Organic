import { cva } from 'class-variance-authority';

export const contentLayoutVariants = cva('flex flex-col gap-4', {
  variants: {
    variant: {
      default: '',
      twoColumn: 'flex flex-col gap-6 md:flex-row md:gap-8',
      gridColumn_2: 'grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center',
      gridColumn_3: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center',
      gridColumn_4: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
