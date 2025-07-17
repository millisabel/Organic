import { cva } from 'class-variance-authority';
import type { NavLinkHoverStyles } from './types';

export const navLinkVariants = cva(
  [
    'relative',
    'block',
    'px-2 py-1',
    'font-roboto text-medium',
    'transition-colors duration-300 ease-in-out',
    'select-none',
  ],
  {
    variants: {
      state: {
        default: 'text-primary',
        active: 'text-accent',
      },
    },
    defaultVariants: {
      state: 'default',
    },
  },
);

export const navLinkHoverStyles: NavLinkHoverStyles = {
  textColor: 'text-accent',
  transform: '-translate-y-[15px]',
};
