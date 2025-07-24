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
        'h-max px-4 py-2 min-h-[56px] min-w-[250px]',
        'bg-background',
        'rounded-lg',
        'text-lg',
        'ring-2 ring-gray-200',
        'hover:ring-secondary hover:shadow-xl',
        'focus:ring-primary focus-visible:ring-primary',
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
      contact: [
        'w-full p-4 border border-secondary rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none',
      ],
      news: [
        'w-full p-4 rounded-lg',
        'text-lg',
        'focus:ring-2 focus-visible:ring-2 focus:ring-gray-200 focus-visible:ring-gray-200',
      ],
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export { inputVariants };
