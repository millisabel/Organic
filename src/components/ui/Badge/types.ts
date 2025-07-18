import type { VariantProps } from 'class-variance-authority';
import type { badgeVariants } from './variants';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: VariantProps<typeof badgeVariants>['variant'];
  size?: VariantProps<typeof badgeVariants>['size'];
  className?: string;
}
