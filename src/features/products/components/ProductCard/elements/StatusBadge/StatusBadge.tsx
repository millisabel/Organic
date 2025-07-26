import Badge from '@/components/ui/Badge/Badge';
import React from 'react';
import type { StatusBadgeProps } from '.';
import { statusBadgeVariants } from './variants';

const StatusBadge: React.FC<StatusBadgeProps> = ({ text, state, ...props }) => {
  return (
    <Badge
      aria-label={`badge ${text}`}
      role="status"
      variant="status"
      className={statusBadgeVariants({ state })}
      {...props}
    >
      {text ? `${text?.replace(/([A-Z])/g, ' $1').trim()}` : 'button'}
    </Badge>
  );
};

export default StatusBadge;
