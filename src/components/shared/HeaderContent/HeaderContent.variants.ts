import { cva } from 'class-variance-authority';

export const headerVariants = cva('', {
  variants: {
    size: {
      h1: 'text-4xl sm:text-5xl lg:text-7xl',
      h2: 'text-2xl sm:text-3xl lg:text-4xl',
      h3: 'text-xl sm:text-2xl lg:text-3xl',
    },
    font: {
      default: 'font-roboto font-bold',
    },
    color: {
      default: 'text-primary',
    },
    indents: {
      default: 'mb-4',
    },
  },
  defaultVariants: {
    font: 'default',
    size: 'h2',
    color: 'default',
    indents: 'default',
  },
});
