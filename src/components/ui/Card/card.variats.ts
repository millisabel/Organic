import { cva } from 'class-variance-authority';

const cardBaseClasses = [
  'group',
  'relative overflow-hidden',
  'flex flex-col justify-between gap-0', // Layout
  'w-full min-h-[500px]', // Size
  'bg-white', // Background
  'font-sans text-left', // Font
  'shadow-md transition-all duration-500 ease will-change-transform', // Effects
  'hover:shadow-xl', // Hover
].join(' ');

export const cardVariants = cva(cardBaseClasses, {
  variants: {
    layout: {
      default: '',
      itemsEnd: 'justify-end',
    },
    size: {
      default: '',
    },
    background: {
      default: 'bg-background',
    },
    border: {
      default: 'rounded-none',
      roundedFull30: 'rounded-[30px]',
    },
    font: {
      default: '',
    },
    effect: {
      default: 'hover:-translate-y-1',
    },
    hover: {
      default: '',
    },
  },
  defaultVariants: {
    layout: 'default',
    size: 'default',
    background: 'default',
    border: 'default',
    font: 'default',
    effect: 'default',
    hover: 'default',
  },
});

export function getCardClassNames(variant: string) {
  if (variant === 'product') {
    return getProductCardVariants();
  }
  if (variant === 'team') {
    return getTeamCardVariants();
  }
  return getDefaultCardVariants();
}

type CardVariantType = Parameters<typeof cardVariants>[0];

function getProductCardVariants(): CardVariantType {
  return {
    layout: 'itemsEnd',
    background: 'default',
    border: 'roundedFull30',
    font: 'default',
    effect: 'default',
    hover: 'default',
  };
}

function getTeamCardVariants(): CardVariantType {
  return {
    background: 'default',
    border: 'roundedFull30',
    effect: 'default',
  };
}

function getDefaultCardVariants(): CardVariantType {
  return {
    layout: 'default',
    size: 'default',
    font: 'default',
    background: 'default',
    border: 'default',
    effect: 'default',
    hover: 'default',
  };
}

// ====================================================

type CardImageVariantType = Parameters<typeof cardImageVariants>[0];

const cardImageBaseClasses = ['inline-block w-full h-full object-cover'].join(' ');

export const cardImageVariants = cva(cardImageBaseClasses, {
  variants: {
    size: {
      default: [''],
    },
    rounded: {
      default: '',
      top: 'rounded-t-[30px]',
      bottom: 'rounded-b-[30px]',
      full: 'rounded-[30px]',
    },
  },
  defaultVariants: {
    size: 'default',
    rounded: 'default',
  },
});

export function getCardImageVariants(variant: string) {
  if (variant === 'product') {
    return getProductCardImageVariants();
  }
  if (variant === 'team') {
    return getTeamCardImageVariants();
  }
  return getDefaultCardImageVariants();
}

function getProductCardImageVariants(): CardImageVariantType {
  return {
    size: 'default',
    rounded: 'default',
  };
}

function getTeamCardImageVariants(): CardImageVariantType {
  return {
    size: 'default',
    rounded: 'default',
  };
}

function getDefaultCardImageVariants(): CardImageVariantType {
  return {
    size: 'default',
    rounded: 'default',
  };
}

// ====================================================

type CardContentVariantType = Parameters<typeof cardContentVariants>[0];

const cardContentBaseClasses = ['flex flex-col justify-between bg-transparent'].join(' ');

export const cardContentVariants = cva(cardContentBaseClasses, {
  variants: {
    layout: {
      default: '',
      row: 'flex-row',
    },
    size: {
      default: '',
      team: 'py-4 md:py-8 px-6',
    },
  },
  defaultVariants: {
    layout: 'default',
    size: 'default',
  },
});

export function getCardContentVariants(variant: string) {
  if (variant === 'team') {
    return getTeamCardContentVariants();
  }
  return getDefaultCardContentVariants();
}

function getTeamCardContentVariants(): CardContentVariantType {
  return {
    size: 'team',
  };
}

function getDefaultCardContentVariants(): CardContentVariantType {
  return {
    layout: 'default',
    size: 'default',
  };
}
