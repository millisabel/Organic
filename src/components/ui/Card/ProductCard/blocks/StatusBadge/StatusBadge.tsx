import React from 'react';
import { cn } from '@/utils/helpers';
import type { StatusBadgeProps } from '.';
import { statusBadgeVariants } from './variants';

const StatusBadge: React.FC<StatusBadgeProps> = ({ variant = 'default', className }) => {
  return (
    <span
      className={cn(statusBadgeVariants({ variant }), className)}
      aria-label={`${variant} badge`}
      role="status"
    >
      {`${variant?.replace(/([A-Z])/g, ' $1').trim()}`}
    </span>
  );
};

export default StatusBadge;
