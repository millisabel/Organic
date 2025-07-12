import { cva } from 'class-variance-authority';

const defaultCardListVariants =
  'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center';

const cardListVariants = cva(defaultCardListVariants, {
  variants: {
    variant: {
      default: '',
      categories: 'gap-8',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export default cardListVariants;
