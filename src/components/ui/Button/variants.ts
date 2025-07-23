import { cva } from 'class-variance-authority';

export const buttonVariantOptions = [
  'default',
  'outline',
  'accent',
  'transparent',
  'close',
  'red',
  'light',
];
export const buttonSizeOptions = ['default', 'compact', 'circle', 'ellipse', 'square'];
export const buttonStateOptions = ['default', 'loading', 'success', 'disabled', 'notActive'];

const baseClasses = [
  'group inline-flex',
  'flex flex-row items-center justify-center whitespace-nowrap gap-2.5 nowrap',
  'w-max px-4 py-2',
  'text-primary font-roboto font-bold',
  'shadow-md',
  'hover:shadow-xl transition-all duration-300',
  'focus:outline-none focus:ring-2 focus:ring-offset-2',
].join(' ');

export const buttonVariants = cva(baseClasses, {
  variants: {
    variant: {
      default: [
        'bg-primary text-white',
        'hover:bg-accent hover:text-primary',
        'focus:ring-primary',
      ],
      outline: [
        'bg-background',
        'ring-2 ring-primary',
        'hover:bg-primary hover:text-white',
        'focus:ring-primary',
      ],
      social: ['bg-secondary/10', 'hover:bg-primary hover:text-white', 'focus:ring-primary'],
      accent: ['bg-accent', 'hover:bg-primary hover:text-accent', 'focus:ring-primary'],
      transparent: [
        'bg-transparent',
        'shadow-none',
        'hover:bg-secondary hover:text-white',
        'focus:ring-primary',
      ],
      transparentFull: [
        'justify-start',
        'px-0',
        'bg-transparent',
        'shadow-none',
        'hover:shadow-none hover:text-secondary',
        'focus:ring-primary',
      ],
      close: [
        'bg-transparent',
        'shadow-none',
        'hover:text-accent-red hover:shadow-none hover:scale-110',
        'focus:ring-primary',
      ],
      red: [
        'text-accent-red',
        'bg-background',
        'ring-2 ring-primary',
        'ring-accent-red',
        'hover:bg-red-500 hover:text-white',
        'focus:ring-primary',
      ],
      light: ['bg-gray-200 text-primary hover:bg-accent', 'focus:ring-primary'],
      clear: [
        'bg-transparent',
        'shadow-none focus:shadow-none active:shadow-none',
        'hover:shadow-none hover:text-text',
        'focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-white',
        'focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:ring-white',
        'active:outline-none active:ring-0 active:ring-offset-0 active:ring-white',
      ],
    },

    size: {
      default: 'min-w-[200px] rounded-lg  p-4',
      compact: 'h-[30px] min-w-[100px] rounded-full',
      circle: 'h-14 w-14 rounded-full p-4',
      social: 'h-8 w-8 rounded-full p-2',
      ellipse: 'h-14 min-w-[100px] rounded-full py-2 px-4',
      square: 'h-14 w-14 rounded-lg p-4',
    },
    state: {
      default: '',
      loading: [
        'cursor-wait',
        'bg-background',
        'ring-2 ring-background',
        'text-gray-500',
        'shadow-none',
        'hover:shadow-none hover:bg-background hover:text-gray-500',
      ],
      success: [
        'bg-transparent ring-2 ring-secondary-dark',
        'text-secondary-dark',
        'hover:border-bg-green-600 hover:bg-green-600 hover:secondary-dark hover:text-white',
      ],
      disabled: [
        'pointer-events-none',
        'bg-background',
        'opacity-50',
        'ring-2 ring-neutral-500',
        'text-neutral-500',
      ],
      notActive: ['pointer-events-none'],
    },
  },

  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});
