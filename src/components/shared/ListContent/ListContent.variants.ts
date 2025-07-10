import { cva } from 'class-variance-authority';

export const listVariants = cva('', {
  variants: {
    ordered: {
      true: 'list-decimal',
      false: 'list-disc',
    },
    font: {
      default: 'font-opensans text-base',
    },
    color: {
      default: 'text-text',
    },
    indents: {
      default: 'ml-6 my-6',
    },
  },
  defaultVariants: {
    ordered: false,
    font: 'default',
    color: 'default',
    indents: 'default',
  },
});

export const listItemsVariants = cva('', {
  variants: {
    indentItems: {
      default: 'my-4',
    },
  },
  defaultVariants: {
    indentItems: 'default',
  },
});
