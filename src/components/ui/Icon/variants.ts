import { cva } from 'class-variance-authority';

export const iconVariants = cva('', {
  variants: {
    variant: {
      default: '',
      social:
        'text-primary group-hover:text-white transition-all duration-500 group-hover:scale-125',
      menu: 'text-primary group-hover:text-primary transition-all duration-500 group-hover:scale-125',
      cart: 'text-white group-hover:text-primary transition-all duration-500 group-hover:scale-125',
      search:
        'text-white group-hover:text-primary transition-all duration-500 group-hover:scale-125',
      arrow: 'p-1 rounded-full bg-arrowFill text-white',
    },
    size: {
      md: 'w-6 h-6',
    },
    // color: {
    //   primary: 'text-primary',
    //   accent: 'text-accent',
    //   white: 'text-white',
    // },
    // background: {
    //   transparent: 'bg-transparent',
    // },
    // effect: {
    //   none: '',
    //   hoverSocial: 'group-hover:text-white transition-all duration-500 group-hover:scale-125',
    // },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
});
