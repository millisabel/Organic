import { cva } from 'class-variance-authority';

const inputBaseClasses = [
  'group',
  'relative', // Position
  'w-full',
  'bg-white', // Background
  'text-text font-roboto', // Typography
  'transition-all duration-300 ease-in-out', // Effects
  'hover:bg-background', // Hover
  'focus:outline-none focus-visible:outline-none focus:ring-2 focus-visible:ring-2 focus:ring-primary focus-visible:ring-primary',
  'placeholder:font-roboto placeholder:italic placeholder:text-placeholder-text',
  'disabled:pointer-events-none disabled:opacity-50', // Disabled
].join(' ');

const inputVariants = cva(inputBaseClasses, {
  variants: {
    variant: {
      default: [],
      search: [
        'h-full min-h-[66px] px-4 py-2 pr-[66px]',
        'bg-background',
        'rounded-[33px]',
        'text-lg',
        'focus:ring-secondary focus-visible:ring-secondary',
      ],
      quantity: [
        'w-max p-8',
        'text-center',
        'border-2 border-primary',
        'rounded-xl',
        'text-medium font-bold',
      ],
      email: ['px-7 py-8', 'rounded-2xl', 'font-italic text-size-18'],
      error: ['border-red-500'],
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export { inputVariants };
