import { cva } from 'class-variance-authority';

export const listVariants = cva('flex flex-col gap-3 items-left', {
  variants: {
    variant: {
      default: '',
    },
    type: {
      ul: 'list-disc list-inside',
      ol: 'list-decimal list-inside',
    },
    hasIcon: {
      true: 'list-none', // Remove default markers when using custom icons
      false: '',
    },
  },
  defaultVariants: {
    variant: 'default',
    hasIcon: false,
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
