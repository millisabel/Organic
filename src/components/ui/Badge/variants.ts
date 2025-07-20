import { cva } from 'class-variance-authority';

export const badgeVariantOptions = ['default', 'meta', 'data', 'cartCount'];

export const badgeVariants = cva('flex items-center justify-center', {
  variants: {
    variant: {
      default: 'bg-primary text-white',
      meta: 'flex-col w-40 h-40 rounded-full text-primary bg-text-light ring-2 ring-secondary ring-offset-2',
      data: 'flex-col w-20 h-20 rounded-full text-primary bg-white font-roboto font-extrabold text-[1.5rem] shadow-md',
      cartCount:
        'h-5 w-5 p-1 rounded-full bg-green-600 text-white text-[10px] text-center uppercase border-2 border-white',
      status:
        'flex items-center justify-center rounded-lg w-[100px] px-2 py-1 bg-primary text-center text-white text-[10px] uppercase ring-1 ring-offset-1 shadow-xl',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
