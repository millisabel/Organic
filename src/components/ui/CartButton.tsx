import { Link } from 'react-router-dom';
import CartIcon from '../icons/CartIcon';

interface CartButtonProps {
  itemCount: number;
}

const CartButton = ({ itemCount }: CartButtonProps) => {
  return (
    <Link
      to="/cart"
      className="group flex h-[66px] w-[160px] items-center justify-start gap-x-3 rounded-[33px] border border-[#E0E0E0] p-1 transition-colors hover:border-secondary"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary transition-colors group-hover:bg-secondary">
        <CartIcon className="h-[22px] w-[22px] text-white" />
      </div>
      <span className="font-roboto text-lg font-semibold text-primary">Cart ({itemCount})</span>
    </Link>
  );
};

export default CartButton;
