import { cn } from '@/utils/helpers';
import { Link } from 'react-router-dom';
import CartIcon from '../icons/CartIcon';

interface CartButtonProps {
  count?: number;
  className?: string;
}

const CartButton = ({ count = 0, className }: CartButtonProps) => {
  return (
    <Link
      to="/cart"
      className={cn(
        'group relative flex items-center justify-center rounded-full bg-primary transition-colors duration-300 ease-in-out hover:bg-secondary w-[56px] h-[56px] lg:w-auto lg:h-auto lg:rounded-[33px] lg:border lg:border-border lg:hover:shadow-lg lg:hover:border-secondary',
        className,
      )}
    >
      <div className="flex h-full w-full items-center justify-center lg:h-[56px] lg:w-[56px] lg:rounded-full lg:bg-primary lg:transition-colors lg:duration-300 lg:ease-in-out lg:group-hover:bg-secondary">
        <CartIcon className="h-[22px] w-[22px] text-white transition-transform duration-300 ease-in-out group-hover:scale-125" />
      </div>
      {count > 0 && (
        <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-green-600 text-xs font-bold text-white lg:top-0 lg:right-0">
          {count}
        </span>
      )}
    </Link>
  );
};

export default CartButton;
