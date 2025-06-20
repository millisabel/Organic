import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  'group inline-flex items-center justify-center whitespace-nowrap rounded-2xl font-roboto text-xl font-bold ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 shadow-md hover:shadow-lg hover:-translate-y-0.5 gap-2.5 group-hover:[&_span]:bg-white group-hover:[&_span]:text-primary',
  {
    variants: {
      variant: {
        default: 'bg-primary text-white hover:bg-accent hover:text-primary',
        destructive:
          'bg-primary text-white border-2 border-transparent hover:bg-white hover:text-primary hover:border-primary',
        outline:
          'border-2 border-primary bg-background text-primary hover:bg-primary hover:text-white',
        secondary: 'bg-secondary text-primary hover:bg-secondary/80',
        accent: 'bg-accent text-primary hover:bg-primary hover:text-accent',
      },
      size: {
        default: 'h-20 min-w-[220px] px-4 py-2',
        'icon-lg': 'h-14 w-14 rounded-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);
