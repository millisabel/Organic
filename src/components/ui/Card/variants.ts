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
      product: ['h-full', 'hover:shadow-xl hover:translate-y-[-10px]'],
    },
    state: {
      default: '',
      inCart: 'ring-2 ring-secondary',
      outOfStock: 'opacity-50 cursor-not-allowed hover:shadow-none hover:translate-y-0',
      new: '',
    },
  },
  defaultVariants: {
    variant: 'default',
    state: 'default',
  },
});
