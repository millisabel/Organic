import { Link } from 'react-router-dom';

import CartIcon from '../icons/CartIcon';

const CartButton = () => {
  return (
    <Link
      to="/cart"
      className="group flex h-[66px] w-[160px] items-center justify-start gap-x-3 rounded-[33px] border border-border p-1 transition-all duration-300 ease-in-out"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary transition-all duration-300 ease-in-out group-hover:bg-secondary group-hover:shadow-lg">
        <CartIcon className="h-[22px] w-[22px] text-white transition-transform duration-300 group-hover:scale-125" />
      </div>
      <span className="font-roboto text-lg font-semibold text-primary">Cart (0)</span>
    </Link>
  );
};

export default CartButton;
