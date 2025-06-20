import { Link } from 'react-router-dom';

import CartIcon from '../icons/CartIcon';

interface CartButtonProps {
  count?: number;
}

const CartButton = ({ count = 0 }: CartButtonProps) => {
  return (
    <Link
      to="/cart"
      className="group flex h-[66px] items-center justify-start gap-x-3 rounded-[33px] border border-border p-1 transition-all duration-300 ease-in-out hover:shadow-lg hover:border-secondary"
    >
      <div className="flex h-[56px] w-[56px] items-center justify-center rounded-full bg-primary transition-colors duration-300 ease-in-out group-hover:bg-secondary">
        <CartIcon className="h-[22px] w-[22px] text-white transition-transform duration-300 ease-in-out group-hover:scale-125" />
      </div>
      <span className="font-roboto text-lg font-semibold text-primary">Cart ({count})</span>
    </Link>
  );
};

export default CartButton;
