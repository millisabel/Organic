import { cva } from 'class-variance-authority';

const baseBadgeClasses = [
  'flex items-center justify-center',
  'bg-white',
  'font-bold text-primary',
  'select-none',
].join(' ');

export const dataBadgeVariants = cva(baseBadgeClasses, {
  variants: {
    format: {
      short: 'absolute top-4 left-4 flex-col w-20 h-20 rounded-full shadow',
      long: 'flex-row w-full h-20 rounded-lg',
    },
  },
  defaultVariants: {
    format: 'short',
  },
});

export const dataBadgeContentClasses = cva(baseBadgeClasses, {
  variants: {
    formatDay: {
      short: 'text-2xl',
      long: 'text-sm',
    },
    formatMonth: {
      short: 'text-sm',
      long: 'text-sm',
    },
  },
});
