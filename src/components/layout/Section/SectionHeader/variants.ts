import { cva } from 'class-variance-authority';

export const sectionHeaderVariants = cva('flex flex-col gap-4 mb-10 text-center', {
  variants: {
    variant: {
      default: '',
      home: 'text-center md:text-left w-full md:max-w-md',
      banner: 'max-w-full text-center',
      single: 'text-center',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
