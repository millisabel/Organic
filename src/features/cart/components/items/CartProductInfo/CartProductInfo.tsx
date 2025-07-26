import { Link } from 'react-router-dom';
import type { CartProductInfoProps } from './types';
import { getImageUrl } from '@/utils/helpers';

const CartProductInfo = ({ item }: CartProductInfoProps) => {
  console.log(item);
  const imageUrl = getImageUrl('products', item.imageName as string);

  return (
    <Link
      to={`/product/${item.id}`}
      className="flex items-center gap-4 group"
      tabIndex={0}
      aria-label={`Go to ${item.title} page`}
    >
      <img
        src={imageUrl}
        alt={item.title}
        className="w-16 h-16 object-contain rounded-lg border group-hover:border-primary group-hover:shadow-md transition-all"
      />
      <span className="font-semibold text-primary underline-offset-2 group-hover:underline">
        {item.title}
      </span>
    </Link>
  );
};

export default CartProductInfo;
