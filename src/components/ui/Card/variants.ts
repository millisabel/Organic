import { cva } from 'class-variance-authority';

const cardBaseClasses = [
  'group',
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
        'bg-background',
        'border-2 border-transparent',
        'font-sans text-left',
        'shadow-md',
        'transition-all duration-300 ease-in-out',
        'hover:shadow-lg hover:-translate-y-0.5',
      ],
      isInCart: ['border-2 border-green-600 shadow-lg'],
      isOutOfStock: ['filter grayscale opacity-70 pointer-events-none'],
    },
    size: {
      default: '',
      product: 'h-[550px]',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

export { cardVariants };
