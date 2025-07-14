import { cva } from 'class-variance-authority';

const baseClasses = [
  'group',
  'flex items-center justify-center whitespace-nowrap gap-2.5 rounded-2xl', // Layout
  'bg-transparent', // Background
  'text-primary font-roboto text-xl font-bold', // Typography
  'ring-offset-background', // Ring
  'shadow-md transition-all duration-300', // Effects
  'hover:shadow-lg hover:-translate-y-0.5', // Hover
  'focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2', // Focus
  'disabled:pointer-events-none disabled:opacity-50', // Disabled
].join(' ');

const baseProductButton = [
  'bg-background',
  'border-2',
  'font-sans text-[15px]',
  'shadow-none',
  'hover:shadow-lg hover:-translate-y-0.5',
  'focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus:ring-2',
];

export const buttonVariants = cva(baseClasses, {
  variants: {
    variant: {
      default: [
        'bg-primary', // Background
        'text-white', // Text
        'hover:bg-accent hover:text-primary', // Hover
      ],
      destructive: [
        'bg-primary', // Background
        'border-2 border-transparent', // Border
        'text-white', // Text
        'hover:bg-white hover:text-primary hover:border-primary', // Hover
      ],
      outline: [
        'bg-background', // Background
        'border-2 border-primary', // Border
        'text-primary', // Text
        'hover:bg-primary hover:text-white', // Hover
      ],
      accent: [
        'bg-accent', // Background
        'text-primary', // Text
        'hover:bg-primary hover:text-accent', // Hover
      ],
      social: [
        'bg-social-bg', // Background
        'shadow-none', // Effects
        'hover:bg-secondary hover:text-white', // Hover
      ],
      socialNoBg: [
        'bg-transparent', // Background
        'shadow-none', // Effects
        'hover:bg-secondary hover:text-white', // Hover
      ],
      menu: [
        'bg-transparent', // Background
        'border-2', // Border
        'shadow-none', // Effects
        'hover:bg-accent hover:text-primary',
      ],
      cart: [
        'bg-primary', // Background
        'text-white', // Text
        'shadow-none', // Effects
        'hover:bg-accent hover:text-primary', // Hover
      ],
      search: [
        'text-white',
        'bg-secondary', // Background
        'shadow-none', // Effects
        'hover:bg-accent hover:text-white hover:text-primary', // Hover
      ],
      floatingCart: [
        'fixed bottom-6 right-6 z-50', // Position
        'flex items-center gap-4', // Layout
        'text-white font-bold text-lg', // Text
        'bg-primary', // Background
        'shadow-none transition-colors shadow-2xl', // Effects
        'hover:bg-accent hover:text-primary', // Hover
      ],
      product: [
        ...baseProductButton,
        'border-primary', // Border
        'text-primary', // Text
        'hover:bg-primary hover:text-white', // Hover
        'focus:ring-2 focus:ring-primary', // Focus
      ],
      productInCart: [
        ...baseProductButton,
        'border-green-600', // Border
        'text-green-600', // Text
        'hover:bg-accent hover:border-accent hover:text-white', // Hover
      ],
      productOutOfStock: [
        ...baseProductButton,
        'border-neutral-500', // Border
        'text-neutral-500', // Text
        'cursor-not-allowed', // Effects
        'hover:none', // Hover
      ],
      productLoading: [
        ...baseProductButton,
        'border-gray-500', // Border
        'text-gray-500', // Text
        'cursor-wait', // Effects
        'hover:bg-accent hover:text-primary', // Hover
      ],
      productTrash: [
        'group/local',
        ...baseProductButton,
        'border-red-500', // Border
        'text-red-500', // Text
        'hover:bg-red-500 hover:text-white', // Hover
        'focus:ring-primary', // Focus
      ],
      badgeProduct: [
        'bg-primary', // Background
        'text-white text-[15px] font-semibold font-sans', // Text
        'shadow-none', // Effects
        'hover:bg-accent hover:text-primary', // Hover
        'focus-visible:ring-transparent', // Focus
      ],
    },
    size: {
      default: 'h-20 w-full sm:w-max sm:min-w-[220px] px-4 py-2 mx-auto lg:mx-0',
      center: 'h-20 mx-auto min-w-[220px] w-max px-4 py-2',
      fullWidthButton: 'h-12 w-full rounded-lg',
      roundedSquare: 'h-12 w-12 rounded-lg flex-shrink-0',
      round: 'h-14 w-14 rounded-full flex-shrink-0 hover:translate-y-0 hover:scale-125',
      roundSmall: 'h-8 w-8 rounded-full flex-shrink-0 hover:translate-y-0 hover:scale-125',
      pillButton: 'px-6 py-4 rounded-full',
      compactButton: 'h-[30px] min-w-[100px] rounded-lg',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});
