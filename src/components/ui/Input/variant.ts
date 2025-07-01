import { cva } from 'class-variance-authority';

const inputBaseClasses = [
  'group',
  'relative', // Position
  'w-full', // Layout
  'border-none', // Border
  'bg-background', // Background
  'text-text', // Typography
  'transition-all duration-300 ease-in-out', // Effects
  '', // Hover
  '', // Focus
  'placeholder:font-roboto placeholder:italic placeholder:text-placeholder-text', // Placeholder
  'disabled:pointer-events-none disabled:opacity-50', // Disabled
].join(' ');

const inputVariants = cva(inputBaseClasses, {
  variants: {
    variant: {
      default: [],
      search: [
        'w-full px-4 py-0 rounded-tl-[33px] rounded-bl-[33px]', // Layout
        'bg-transparent', // Background
        'text-lg outline-none', // Typography
        'focus:outline-none focus-visible:outline-none', // Focus
      ],
      quantity: ['text-center border-2 border-primary rounded-xl text-xl font-bold'],
    },
    inputSize: {
      default: '',
      search: 'h-[56px]',
      quantity: 'h-[56px] w-24 py-4 px-2',
    },
  },
  defaultVariants: {
    variant: 'default',
    inputSize: 'default',
  },
});

export { inputVariants };
