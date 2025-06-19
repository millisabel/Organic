import { Link } from 'react-router-dom';

interface CartButtonProps {
  itemCount?: number;
}

const CartButton = ({ itemCount = 0 }: CartButtonProps) => {
  return (
    <Link to="/cart" className="flex items-center space-x-2">
      <span className="sr-only">Cart</span>
      <div className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        {itemCount > 0 && (
          <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-xs font-bold text-primary">
            {itemCount}
          </span>
        )}
      </div>
    </Link>
  );
};

export default CartButton;
