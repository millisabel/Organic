import { cva } from 'class-variance-authority';

const titleDefault = ['text-primary font-roboto font-bold'].join(' ');

export const titleVariants = cva(titleDefault, {
  variants: {
    variant: {
      default: 'text-3xl font-bold',
      heroTitle: 'text-7xl font-extrabold',
      sectionTitle: 'text-5xl font-extrabold',
      sectionSubTitle: 'text-secondary text-4xl font-yellowtail italic font-normal',
      cardTitle: 'text-xl font-semibold',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
