import type { VariantProps } from 'class-variance-authority';
import type { ReactNode } from 'react';
import type { CardVariants } from '.';
import type { cardContentVariants, cardVariants } from './card.variats';

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
  badges?: ReactNode | ReactNode[];
  onClick?: () => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLDivElement>) => void;
}

export type CardVariantsProps = VariantProps<typeof cardVariants>;
export type CardContentVariantsProps = VariantProps<typeof cardContentVariants>;
