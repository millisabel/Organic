import { cn } from '@/utils/helpers';
import { badgeVariants } from './variants';

const CartCountBadge = ({ count = 0, className }: { count: number; className?: string }) => {
  return (
    <span
      className={cn(badgeVariants({ variant: 'cart', size: 'default' }), className)}
      data-component="CartCountBadge"
    >
      {count}
    </span>
  );
};

export default CartCountBadge;
