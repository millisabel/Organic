import { cva } from 'class-variance-authority';

export const listVariants = cva('', {
  variants: {
    variant: {
      default: '',
    },
    type: {
      ul: 'list-disc list-inside',
      ol: 'list-decimal list-inside',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export const listItemVariants = cva('', {
  variants: {
    variant: {
      default: '',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
