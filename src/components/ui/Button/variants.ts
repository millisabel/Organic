import { cva } from 'class-variance-authority';

const baseClasses = [
  'group inline-flex',
  'flex items-center justify-center whitespace-nowrap gap-2.5',
  'px-4 py-2',
  'mx-auto',
  'text-primary font-roboto font-bold',
  'shadow-md',
  'hover:shadow-xl transition-all duration-300',
  'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
].join(' ');

export const buttonVariants = cva(baseClasses, {
  variants: {
    variant: {
      default: ['bg-primary text-white', 'hover:bg-accent hover:text-primary'],
      outline: ['bg-background', 'border-2 border-primary', 'hover:bg-primary hover:text-white'],
      accent: ['bg-accent', 'hover:bg-primary hover:text-accent'],
      transparent: ['bg-transparent', 'shadow-none', 'hover:bg-secondary hover:text-white'],
      close: [
        'bg-transparent',
        'shadow-none',
        'hover:text-accent-red hover:shadow-none hover:scale-110',
      ],
      red: [
        'text-accent-red',
        'bg-background',
        'border-2 border-primary',
        'border-accent-red',
        'hover:bg-red-500 hover:text-white',
      ],
      light: ['bg-gray-200 text-primary hover:bg-accent'],
    },

    size: {
      default: 'min-w-[200px] rounded-lg  p-4',
      compact: 'h-[30px] min-w-[100px] rounded-full',
      circle: 'h-14 w-14 rounded-full p-4',
      ellipse: 'h-14 min-w-[100px] rounded-full py-2 px-4',
      square: 'h-14 w-14 rounded-lg p-4',
    },
    state: {
      default: '',
      loading: [
        'cursor-wait',
        'bg-background',
        'border-2 border-background',
        'text-gray-500',
        'shadow-none',
        'hover:shadow-none hover:bg-background hover:text-gray-500',
      ],
      success: [
        'bg-transparent border-2 border-secondary-dark',
        'text-secondary-dark',
        'hover:border-bg-green-600 hover:bg-green-600 hover:secondary-dark hover:text-white',
      ],
      disabled: [
        'pointer-events-none',
        'bg-background',
        'opacity-50',
        'border-neutral-500',
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
