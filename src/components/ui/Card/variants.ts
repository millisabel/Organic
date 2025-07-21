import { cva } from 'class-variance-authority';

export const cardVariantsOptions = ['default', 'small'];

const cardBaseClasses = [
  'relative overflow-hidden',
  'flex flex-col justify-between', // Layout
  'min-h-[300px] min-w-[200px]',
  'bg-background', // Background
  'rounded-[30px]', // Border
  'shadow-md transition-all duration-300 ease-in-out', // Effects
  'hover:shadow-xl', // Hover
].join(' ');

export const cardVariants = cva(cardBaseClasses, {
  variants: {
    variant: {
      default: [''],
      notShadow: ['shadow-none hover:shadow-none'],
    },
    size: {
      default: '',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});
