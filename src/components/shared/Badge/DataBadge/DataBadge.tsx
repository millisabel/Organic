import Badge from '@/components/ui/Badge/Badge';
import { formatDate } from '@/utils/helpers';
import type { DataBadgeProps } from './types';

const DataBadge = ({ date, ...badgeProps }: DataBadgeProps) => {
  const shortDate = formatDate({ date, format: 'short' });
  return (
    <Badge variant="data" {...badgeProps}>
      <span>{shortDate.split(' ')[1]}</span>
      <span>{shortDate.split(' ')[0]}</span>
    </Badge>
  );
};

export default DataBadge;
