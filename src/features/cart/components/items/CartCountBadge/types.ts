import type { BadgeProps } from '@/components/ui/Badge/types';

export interface CartCountBadgeProps extends Omit<BadgeProps, 'children' | 'variant'> {
  count: number;
}
