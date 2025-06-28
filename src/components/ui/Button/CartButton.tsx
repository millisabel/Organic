import { Button } from '@/components/ui/Button';
import CartIcon from '@/components/ui/Icon/CartIcon';
import CartCountBadge from '@/components/ui/Badge/CartCountBadge';
import { cn } from '@/utils/helpers';
import { Link } from 'react-router-dom';

interface CartButtonProps {
  count?: number;
  className?: string;
}

const CartButton = ({ count = 0, className }: CartButtonProps) => {
  return (
    <Button
      asChild
      variant="cart"
      size="round"
      aria-label="Open cart"
      className={cn('relative', className)}
      data-component="CartButton"
    >
      <Link to="/cart">
        <CartIcon viewBox="0 0 27 24" variant="cart" size="md" />
        {count > 0 && <CartCountBadge count={count} />}
      </Link>
    </Button>
  );
};

export default CartButton;
