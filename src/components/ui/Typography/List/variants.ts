import { cva } from 'class-variance-authority';

export const listVariants = cva('flex flex-col gap-3 items-left text-base text-text', {
  variants: {
    variant: {
      default: '',
    },
    type: {
      ul: 'list-disc list-inside [&>li]:pl-0',
      ol: 'list-decimal list-inside [&>li]:pl-0',
    },
  },
  defaultVariants: {
    variant: 'default',
    type: 'ul',
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
