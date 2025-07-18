import type { VariantProps } from 'class-variance-authority';
import type { statusBadgeVariants } from './variants';

export interface StatusBadgeProps {
  variant?: VariantProps<typeof statusBadgeVariants>['variant'];
  className?: string;
}
