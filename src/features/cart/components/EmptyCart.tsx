import CartIcon from '@/components/shared/Icon/CartIcon';
import Button from '@/components/ui/Button/Button';
import { Link } from 'react-router-dom';

const EmptyCart = () => (
  <div className="flex flex-col items-center justify-center py-20">
    <div className="mb-8 opacity-60">
      <CartIcon className="w-32 h-32 text-primary" />
    </div>
    <p className="text-xl text-neutral-500 mb-6">Your cart is empty.</p>
    <Button asChild>
      <Link to="/shop">Go to Shop</Link>
    </Button>
  </div>
);

export default EmptyCart;
