import { Button } from '@/components/ui/Button';
import { cn } from '@/utils/helpers';
import { Link } from 'react-router-dom';
import CartIcon from '@/components/icons/CartIcon';

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
        {count > 0 && (
          <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-green-600 text-xs font-bold text-white lg:top-0 lg:right-0">
            {count}
          </span>
        )}
      </Link>
    </Button>
  );
};

export default CartButton;
