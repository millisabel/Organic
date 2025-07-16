import { CartCountBadge } from '.';

export default {
  title: 'UI/Badge/CartCountBadge',
  component: CartCountBadge,
};

export const CartCountBadgeDefault = () => {
  return (
    <div className="relative w-10 h-10 bg-gray-200">
      <CartCountBadge count={5} />
    </div>
  );
};
