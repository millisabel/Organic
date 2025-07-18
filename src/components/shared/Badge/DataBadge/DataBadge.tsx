import { cn, formatDate } from '@/utils/helpers';
import type { DataBadgeProps } from './types';
import Badge from '@/components/ui/Badge/Badge';

const DataBadge = ({ date, className }: DataBadgeProps) => {
  const shortDate = formatDate({ date, format: 'short' });
  return (
    <Badge className={cn('', className)} variant="data">
      <span>{shortDate.split(' ')[1]}</span>
      <span>{shortDate.split(' ')[0]}</span>
    </Badge>
  );
};

export default DataBadge;
