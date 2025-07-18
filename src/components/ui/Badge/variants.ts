import { cva } from 'class-variance-authority';

export const badgeVariantOptions = ['default', 'meta', 'data'];

export const badgeVariants = cva('flex items-center justify-center', {
  variants: {
    variant: {
      default: 'bg-primary text-white',
      meta: 'flex-col w-40 h-40 rounded-full text-primary bg-text-light ring-2 ring-secondary ring-offset-2',
      data: 'flex-col w-20 h-20 rounded-full text-primary bg-white font-roboto font-extrabold text-[1.5rem] shadow-md',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
