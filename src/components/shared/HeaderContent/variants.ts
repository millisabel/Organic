import { cva } from 'class-variance-authority';

export const headerVariants = cva('', {
  variants: {
    size: {
      h1: 'text-7xl',
      h2: 'text-4xl',
      h3: 'text-3xl',
      h4: 'text-2xl',
      h5: 'text-xl',
    },
    font: {
      default: 'font-roboto font-bold',
      semibold: 'font-semibold',
    },
    color: {
      default: 'text-primary',
    },
    border: {
      default: '',
      bottom: 'border-b border-neutral-300',
    },
    indents: {
      default: 'mb-4',
    },
  },
  defaultVariants: {
    size: 'h2',
    font: 'default',
    color: 'default',
    indents: 'default',
    border: 'default',
  },
});
