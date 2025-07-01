import { cva } from 'class-variance-authority';

const cardBaseClasses = [
  'group',
  'relative overflow-hidden',
  'flex flex-col justify-between overflow-hidden', // Layout
  'bg-white', // Background
  'rounded-[30px]', // Border
  'transition-all duration-300 ease-in-out', // Effects
  'hover:shadow-card', // Hover
].join(' ');

const cardVariants = cva(cardBaseClasses, {
  variants: {
    variant: {
      default: [''],
      product: [
        'justify-end',
        'bg-background',
        'border-2 border-transparent',
        'font-sans text-left',
        'shadow-md',
        'hover:shadow-lg hover:-translate-y-0.5',
      ],
      isInCart: ['shadow-md', 'bg-background'],
      isOutOfStock: ['filter grayscale opacity-70 pointer-events-none'],
    },
    size: {
      default: '',
      product: 'h-[550px] w-full h-full max-w-[335px] mx-auto',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

export { cardVariants };
