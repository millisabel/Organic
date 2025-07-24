import { cva } from 'class-variance-authority';

export const contentLayoutVariants = cva('', {
  variants: {
    variant: {
      default: '',
      flexCol: 'flex flex-col gap-4',
      flexRow: 'flex flex-row gap-6 md:flex-row md:gap-4 flex-wrap',
      gridCol_md_2: 'grid grid-cols-1 md:grid-cols-2 gap-4',
      gridCol_lg_2: 'grid grid-cols-1 lg:grid-cols-2 gap-4',
      gridCol_lg_3: 'grid grid-cols-1 lg:grid-cols-3 gap-4',
      gridCol_sm_2_lg_4: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2',
    },
    align: {
      default: '',
      center_lg_st: 'items-center justify-center lg:items-start',
      start: 'items-start',
      end: 'items-center justify-end',
    },
  },
  defaultVariants: {
    variant: 'default',
    align: 'default',
  },
});
