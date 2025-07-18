import type { BadgeProps } from '@/components/ui/Badge/types';

export interface DataBadgeProps extends Omit<BadgeProps, 'children'> {
  date: string | Date;
}
