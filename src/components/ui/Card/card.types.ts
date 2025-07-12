import type { VariantProps } from 'class-variance-authority';
import type { cardContentVariants, cardVariants } from './card.variats';
import type { CardVariants } from '.';

export interface CardProps {
  variant?: CardVariants;
  children?: React.ReactNode;
  tabIndex?: number;
  ariaLabel?: string;
  className?: string;
  imgClassName?: string;
  contentClassName?: string;
  imgProps?: {
    name: string;
    alt?: string;
    folder: string;
    loading?: 'lazy' | 'eager';
  };
}

export interface CardVariantsProps {
  layout: VariantProps<typeof cardVariants>['layout'];
  size: VariantProps<typeof cardVariants>['size'];
  background: VariantProps<typeof cardVariants>['background'];
  border: VariantProps<typeof cardVariants>['border'];
  effect: VariantProps<typeof cardVariants>['effect'];
  hover: VariantProps<typeof cardVariants>['hover'];
}

export interface CardContentVariantsProps {
  layout: VariantProps<typeof cardContentVariants>['layout'];
  size: VariantProps<typeof cardContentVariants>['size'];
}
