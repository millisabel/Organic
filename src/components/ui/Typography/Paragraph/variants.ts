import { cva } from 'class-variance-authority';

const defaultVariants = ['text-text text-left text-base'].join(' ');

export const paragraphVariants = cva(defaultVariants, {
  variants: {
    variant: {
      default: '',
      large: 'text-lg',
      small: 'text-sm',
      extraSmall: 'text-xs text-text-light',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
