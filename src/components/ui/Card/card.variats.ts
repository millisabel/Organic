import { cva } from 'class-variance-authority';

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
    layout: {
      default: '',
      itemsEnd: 'justify-end',
      itemsCenter: 'justify-center',
      category: 'items-center gap-5 ',
    },
    size: {
      default: '',
      category: 'min-h-[370px] p-0',
      gallery: 'min-h-[280px] lg:min-h-[585px]',
    },
    background: {
      default: '',
      bgTransparent: 'bg-transparent',
    },
    border: {
      default: 'rounded-none',
      rounded30: 'rounded-[30px]',
      roundedFull: 'rounded-full',
    },
    effect: {
      default: 'shadow-none',
    },
    hover: {
      default: '',
      translateY1: 'hover:-translate-y-1',
      shadowNone: 'hover:shadow-none',
    },
  },
  defaultVariants: {
    layout: 'default',
    size: 'default',
    background: 'default',
    border: 'default',
    effect: 'default',
    hover: 'default',
  },
});

const PRODUCT_CARD_VARIANTS = {
  layout: 'itemsEnd',
  border: 'roundedFull30',
  effect: 'default',
};

const TEAM_CARD_VARIANTS = {
  border: 'rounded30',
  hover: 'translateY1',
};

const CATEGORY_CARD_VARIANTS = {
  layout: 'category',
  size: 'category',
  background: 'bgTransparent',
  border: 'default',
  effect: 'default',
  hover: 'shadowNone',
};

const GALLERY_CARD_VARIANTS = {
  layout: 'itemsCenter',
  size: 'gallery',
  background: 'bgTransparent',
  border: 'rounded30',
  effect: 'default',
  hover: 'shadowNone',
};

const DEFAULT_CARD_VARIANTS = {
  layout: 'default',
  size: 'default',
  background: 'default',
  border: 'default',
  effect: 'default',
  hover: 'default',
};

export function getCardClassNames(variant: string) {
  if (variant === 'product') {
    return PRODUCT_CARD_VARIANTS;
  }
  if (variant === 'team') {
    return TEAM_CARD_VARIANTS;
  }
  if (variant === 'category') {
    return CATEGORY_CARD_VARIANTS;
  }
  if (variant === 'gallery') {
    return GALLERY_CARD_VARIANTS;
  }
  return DEFAULT_CARD_VARIANTS;
}

// ====================================================

const cardContentBaseClasses = ['flex flex-col justify-between bg-transparent'].join(' ');

export const cardContentVariants = cva(cardContentBaseClasses, {
  variants: {
    layout: {
      default: '',
      row: 'flex-row',
      center: 'items-center justify-center',
    },
    size: {
      default: 'p-4',
      team: 'py-4 md:py-8 px-6',
    },
  },
  defaultVariants: {
    layout: 'default',
    size: 'default',
  },
});

const TEAM_CARD_CONTENT_VARIANTS = {
  layout: 'default',
  size: 'team',
};

const GALLERY_CARD_CONTENT_VARIANTS = {
  layout: 'center',
};

const DEFAULT_CARD_CONTENT_VARIANTS = {
  layout: 'default',
  size: 'default',
};

export function getCardContentVariants(variant: string) {
  if (variant === 'team') {
    return TEAM_CARD_CONTENT_VARIANTS;
  }
  if (variant === 'gallery') {
    return GALLERY_CARD_CONTENT_VARIANTS;
  }
  return DEFAULT_CARD_CONTENT_VARIANTS;
}
