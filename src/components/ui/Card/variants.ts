import { cva } from 'class-variance-authority';

const cardBaseClasses = [
  'group',
  'relative',
  'flex flex-col justify-between', // Layout
  'bg-white', // Background
  'rounded-[30px]', // Border
  'transition-all duration-300 ease-in-out', // Effects
  'hover:shadow-card', // Hover
].join(' ');

const cardProductClasses = [
  'justify-end',
  'overflow-hidden',
  'bg-background',
  'font-sans text-left',
  'shadow-md',
  'hover:shadow-lg hover:-translate-y-0.5',
];

export const cardVariants = cva(cardBaseClasses, {
  variants: {
    variant: {
      default: [''],
      product: [...cardProductClasses],
      isInCart: [...cardProductClasses],
      isOutOfStock: [...cardProductClasses, 'filter grayscale opacity-70 pointer-events-none'],
      news: ['relative rounded-xl group cursor-default'],
    },
    size: {
      default: '',
      product: 'h-[550px] w-full h-full max-w-[335px] mx-auto',
      news: 'min-h-[525px] w-full mb-4 md:mb-28',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});
