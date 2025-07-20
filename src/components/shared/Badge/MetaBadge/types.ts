import type { BadgeProps } from '@/components/ui/Badge/types';

export interface MetaBadgeProps extends Omit<BadgeProps, 'children'> {
  label: string;
  description: string;
}
