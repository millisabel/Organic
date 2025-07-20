import Badge from '@/components/ui/Badge';
import type { CartCountBadgeProps } from '.';

const CartCountBadge = ({ count = 0, ...props }: CartCountBadgeProps) => {
  const displayCount = Math.max(0, count);

  return (
    <Badge variant="cartCount" data-component="CartCountBadge" {...props}>
      {displayCount}
    </Badge>
  );
};

export default CartCountBadge;
