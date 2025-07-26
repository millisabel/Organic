import type { BadgeProps } from '@/components/ui/Badge/types';
import type { VariantProps } from 'class-variance-authority';
import type { statusBadgeVariants } from './variants';

export interface StatusBadgeProps extends Omit<BadgeProps, 'children'> {
  state?: VariantProps<typeof statusBadgeVariants>['state'];
  text?: string;
}
