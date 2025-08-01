import CartIcon from '@/components/shared/Icon/CartIcon';
import Button from '@/components/ui/Button';
import CartCountBadge from '@/features/cart/components/items/CartCountBadge';
import { Link } from 'react-router-dom';
import type { CartButtonProps } from '.';
import { useScrollToElement } from '@/hooks';

const CartButton = ({ count = 0, ...props }: CartButtonProps) => {
  const { scrollToElement } = useScrollToElement({ delay: 300 });
  const handleClick = () => {
    scrollToElement('[id="cart"]');
  };
  return (
    <Button
      asChild
      variant="default"
      size="circle"
      aria-label="Open cart"
      nameComponent="CartButton"
      onClick={handleClick}
      {...props}
    >
      <Link to="/cart" className="relative" onClick={handleClick}>
        <CartIcon />
        {count >= 0 && <CartCountBadge count={count} className="absolute -top-2 -right-2" />}
      </Link>
    </Button>
  );
};

export default CartButton;
