import React from 'react';
import { badgeVariants } from './variants';
import { cn } from '@/utils/helpers';

interface StatusBadgeProps {
  type: 'new' | 'outOfStock' | 'sale' | 'inCart';
  variant?: 'new' | 'outOfStock' | 'sale' | 'inCart';
  size?: 'default' | 'lg' | 'xl';
  className?: string;
  font?: 'default' | 'lg' | 'xl';
}

const badgeText = {
  outOfStock: 'Out of Stock',
  sale: 'Sale',
  new: 'New',
  inCart: 'In Cart',
};

const StatusBadge: React.FC<StatusBadgeProps> = ({
  type,
  variant,
  size = 'xl',
  className,
  font = 'default',
}) => (
  <span
    className={cn(badgeVariants({ variant: variant, size: size, font: font }), className)}
    aria-label={badgeText[type]}
  >
    {badgeText[type]}
  </span>
);

export default StatusBadge;
