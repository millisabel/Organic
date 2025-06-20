import { Link } from 'react-router-dom';

import CartIcon from '../icons/CartIcon';

interface CartButtonProps {
  count?: number;
}

const CartButton = ({ count = 0 }: CartButtonProps) => {
  return (
    <Link
      to="/cart"
      className="group flex h-[66px] items-center justify-start gap-x-3 transition-all duration-300 ease-in-out lg:rounded-[33px] lg:border lg:border-border lg:p-1 lg:hover:shadow-lg lg:hover:border-secondary"
    >
      <div className="flex h-[56px] w-[56px] items-center justify-center rounded-full bg-primary transition-colors duration-300 ease-in-out group-hover:bg-secondary">
        <CartIcon className="h-[22px] w-[22px] text-white transition-transform duration-300 ease-in-out group-hover:scale-125" />
      </div>
      <span className="hidden font-roboto text-lg font-semibold text-primary lg:inline">
        Cart ({count})
      </span>
    </Link>
  );
};

export default CartButton;
