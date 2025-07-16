import CartIcon from '@/components/shared/Icon/CartIcon';
import CartCountBadge from '@/components/ui/Badge/CartCountBadge/CartCountBadge';
import Button from '@/components/ui/Button/Button';
import { cn } from '@/utils/helpers';
import { Link } from 'react-router-dom';
import type { CartButtonProps } from '.';

const CartButton = ({ count = 0, className }: CartButtonProps) => {
  return (
    <Button
      asChild
      variant="default"
      size="circle"
      aria-label="Open cart"
      className={cn('relative', className)}
      nameComponent="CartButton"
    >
      <Link to="/cart">
        <CartIcon />
        {count > 0 && <CartCountBadge count={count} className="w-7 h-7" />}
      </Link>
    </Button>
  );
};

export default CartButton;
