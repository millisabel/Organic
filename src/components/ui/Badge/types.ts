import type { VariantProps } from 'class-variance-authority';
import type { badgeVariants } from './variants';

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  children?: React.ReactNode;
  className?: string;
}
