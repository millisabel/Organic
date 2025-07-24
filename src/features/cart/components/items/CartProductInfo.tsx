import type { CartItem } from '@/features/cart/components/types';
import { getImageUrl } from '@/utils/helpers';
import { Link } from 'react-router-dom';

interface Props {
  item: CartItem;
}

const CartProductInfo = ({ item }: Props) => (
  <Link
    to={`/product/${item.id}`}
    className="flex items-center gap-4 group"
    tabIndex={0}
    aria-label={`Go to ${item.title} page`}
  >
    <img
      src={getImageUrl('products', item.imageName)}
      alt={item.title}
      className="w-16 h-16 object-contain rounded-lg border group-hover:border-primary group-hover:shadow-md transition-all"
    />
    <span className="font-semibold text-primary underline-offset-2 group-hover:underline">
      {item.title}
    </span>
  </Link>
);

export default CartProductInfo;
