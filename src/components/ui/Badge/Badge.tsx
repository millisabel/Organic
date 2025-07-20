import { cn } from '@/utils/helpers';
import type { BadgeProps } from './types';
import { badgeVariants } from './variants';

const Badge = ({ children, variant, className, ...props }: BadgeProps) => {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props}>
      {children}
    </div>
  );
};

export default Badge;
