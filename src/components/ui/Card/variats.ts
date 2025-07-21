import { cva } from 'class-variance-authority';
import type { CardVariants } from './types';

// Base classes for card component
const cardBaseClasses = [
  'group',
  'relative overflow-hidden',
  'flex flex-col justify-between gap-0', // Layout
  'w-full min-h-[500px]', // Size
  'bg-background', // Background
  'font-sans text-left', // Font
  'shadow-md transition-all duration-500 ease will-change-transform', // Effects
  'hover:shadow-xl', // Hover
].join(' ');

export const cardVariants = cva(cardBaseClasses, {
  variants: {
    variant: {
      default: '',
      product: 'justify-end rounded-[30px] cursor-pointer hover:-translate-y-1',
      productDetailed: 'flex-row bg-transparent hover:shadow-md',
      team: 'rounded-[30px] hover:-translate-y-1',
      category:
        'items-center gap-5 min-h-[370px] p-0 bg-transparent rounded-none shadow-none hover:shadow-none',
      gallery:
        'justify-center min-h-[280px] lg:min-h-[585px] bg-transparent rounded-[30px] shadow-none hover:shadow-none',
      news: 'overflow-visible mb-20 rounded-xl',
      review:
        'max-w-[800px] h-[550px] sm:h-[450px] pb-8 mx-auto justify-center gap-5 bg-transparent shadow-none hover:shadow-none',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

// Base classes for card content
const cardContentBaseClasses = ['flex flex-col justify-between bg-transparent'].join(' ');

export const cardContentVariants = cva(cardContentBaseClasses, {
  variants: {
    variant: {
      default: 'p-4',
      product: 'p-4',
      productDetailed: 'p-4',
      team: 'py-4 md:py-8 px-6',
      category: 'p-4',
      gallery: 'absolute inset-0 h-full w-full',
      news: 'absolute md:left-4 md:right-4 justify-center gap-1 min-h-[330px] h-1/2 px-2 pt-6 pb-8 md:px-14 md:pt-11 md:pb-12 bottom-0 md:-bottom-24 bg-white/95 md:rounded-t-xl md:rounded-r-xl rounded-b-xl shadow-lg',
      review: 'p-4',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

// Type-safe helper functions
export const getCardVariants = (variant: CardVariants) => {
  return { variant };
};

export const getCardContentVariants = (variant: CardVariants) => {
  return { variant };
};

// Legacy functions for backward compatibility (deprecated)
/**
 * @deprecated Use getCardVariants instead
 */
export function getCardClassNames(variant: string) {
  console.warn('getCardClassNames is deprecated. Use getCardVariants instead.');
  return getCardVariants(variant as CardVariants);
}
