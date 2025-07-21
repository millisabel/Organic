import type { VariantProps } from 'class-variance-authority';
import type { cardVariants } from './variants';

export interface CardProps {
  nameComponent?: string;
  children?: React.ReactNode;
  variant?: VariantProps<typeof cardVariants>['variant'];
  className?: string;
}
