import CartCountBadge from '@/components/ui/Badge/CartCountBadge';
import Button from '@/components/ui/Button/Button';
import CartIcon from '@/components/ui/Icon/CartIcon';
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
        <CartIcon viewBox="0 0 27 24" variant="default" size="md" />
        {count > 0 && <CartCountBadge count={count} />}
      </Link>
    </Button>
  );
};

export default CartButton;
