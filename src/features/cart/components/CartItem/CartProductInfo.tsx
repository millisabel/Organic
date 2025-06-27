import type { CartItem } from '@/components/ui/Card/cart';
import { getImageUrl } from '@/utils/helpers';
import { Link } from 'react-router-dom';

interface Props {
  item: CartItem;
}

const CartProductInfo = ({ item }: Props) => (
  <Link
    to={`/shop/${item.id}`}
    className="flex items-center gap-4 group"
    tabIndex={0}
    aria-label={`Go to ${item.name} page`}
  >
    <img
      src={getImageUrl('products', item.imageUrl)}
      alt={item.name}
      className="w-16 h-16 object-contain rounded-lg border group-hover:border-primary group-hover:shadow-md transition-all"
    />
    <span className="font-semibold text-primary underline-offset-2 group-hover:underline">
      {item.name}
    </span>
  </Link>
);

export default CartProductInfo;
