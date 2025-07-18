import type { BadgeProps } from '@/components/ui/Badge/types';

export interface MetaBadgeProps extends Omit<BadgeProps, 'children'> {
  value: string | number;
  label: string;
}
