import type { VariantProps } from 'class-variance-authority';
import type { cardVariants } from './variants';

export interface CardProps extends VariantProps<typeof cardVariants> {
  nameComponent?: string;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}
