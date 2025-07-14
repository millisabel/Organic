import { cva } from 'class-variance-authority';
import { type Variants } from 'framer-motion';

const animationConfig = {
  duration: 0.3,
  ease: 'easeInOut',
  type: 'tween',
} as const;

export const mobileMenuStyles = cva(
  ['fixed inset-0 z-50', 'flex flex-col items-center justify-center', 'bg-white p-8'],
  {
    variants: {
      theme: {
        light: 'bg-white text-black',
        dark: 'bg-black text-white',
      },
    },
    defaultVariants: {
      theme: 'light',
    },
  },
);

export const mobileMenuVariants: Variants = {
  closed: {
    x: '100%',
    transition: animationConfig,
  },
  open: {
    x: 0,
    transition: animationConfig,
  },
};

export const defaultMobileMenuState = 'closed' as const;
