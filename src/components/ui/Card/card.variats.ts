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
      overflowVisible: 'overflow-visible',
      category: 'items-center gap-5 ',
    },
    size: {
      default: '',
      category: 'min-h-[370px] p-0',
      gallery: 'min-h-[280px] lg:min-h-[585px]',
      news: ' mb-20',
    },
    background: {
      default: '',
      bgTransparent: 'bg-transparent',
    },
    border: {
      default: 'rounded-none',
      rounded30: 'rounded-[30px]',
      roundedXl: 'rounded-xl',
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

const NEWS_CARD_VARIANTS = {
  layout: 'overflowVisible',
  size: 'news',
  border: 'roundedXl',
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
  if (variant === 'news') {
    return NEWS_CARD_VARIANTS;
  }
  return DEFAULT_CARD_VARIANTS;
}

// ====================================================

const cardContentBaseClasses = ['flex flex-col justify-between bg-transparent'].join(' ');

export const cardContentVariants = cva(cardContentBaseClasses, {
  variants: {
    position: {
      default: '',
      gallery: 'absolute inset-0',
      news: 'absolute md:left-4 md:right-4',
    },
    layout: {
      default: '',
      row: 'flex-row',
      news: 'justify-center gap-1',
    },
    size: {
      default: 'p-4',
      team: 'py-4 md:py-8 px-6',
      news: 'min-h-[330px] h-1/2 px-2 pt-6 pb-8 md:px-14 md:pt-11 md:pb-12 bottom-0 md:-bottom-24',
      full: 'h-full w-full',
    },
    border: {
      default: 'rounded-none',
      rounded30: 'rounded-[30px]',
      roundedXl: 'rounded-xl',
      roundedFull: 'rounded-full',
      news: 'md:rounded-t-xl md:rounded-r-xl rounded-b-xl',
    },
    background: {
      default: '',
      bgTransparent: 'bg-transparent',
      news: 'bg-white/95',
    },
    effect: {
      default: '',
      shadow: 'shadow-lg',
    },
  },
  defaultVariants: {
    position: 'default',
    layout: 'default',
    size: 'default',
    border: 'default',
    background: 'default',
    effect: 'default',
  },
});

const TEAM_CARD_CONTENT_VARIANTS = {
  layout: 'default',
  size: 'team',
};

const GALLERY_CARD_CONTENT_VARIANTS = {
  position: 'gallery',
  layout: 'center',
  size: 'full',
};

const NEWS_CARD_CONTENT_VARIANTS = {
  position: 'news',
  layout: 'news',
  size: 'news',
  background: 'news',
  border: 'news',
  effect: 'shadow',
};

const DEFAULT_CARD_CONTENT_VARIANTS = {
  position: 'default',
  layout: 'default',
  size: 'default',
  background: 'default',
  border: 'default',
  effect: 'default',
};

export function getCardContentVariants(variant: string) {
  if (variant === 'team') {
    return TEAM_CARD_CONTENT_VARIANTS;
  }
  if (variant === 'gallery') {
    return GALLERY_CARD_CONTENT_VARIANTS;
  }
  if (variant === 'news') {
    return NEWS_CARD_CONTENT_VARIANTS;
  }
  return DEFAULT_CARD_CONTENT_VARIANTS;
}
