import { cva } from 'class-variance-authority';

export const heroVariants = cva('flex items-center', {
  variants: {
    variant: {
      home: 'min-h-screen',
      banner: 'h-auto py-20 md:py-[185px]',
      single: 'h-[30vh] md:h-[50vh]',
    },
  },
  defaultVariants: {
    variant: 'home',
  },
});
