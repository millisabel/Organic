import { getImageUrl } from '@/utils/helpers';
import { Link } from 'react-router-dom';
import type { CartProductInfoProps } from './types';
import { useScrollToElement } from '@/hooks';

const CartProductInfo = ({ item }: CartProductInfoProps) => {
  const { scrollToElement } = useScrollToElement({ delay: 300 });
  const handleClick = () => {
    scrollToElement('[id="product"]');
  };
  const imageUrl = getImageUrl('products', item.imageName as string);

  return (
    <Link
      to={`/shop/${item.id}`}
      className="flex items-center gap-4 group"
      tabIndex={0}
      aria-label={`Go to ${item.title} page`}
      onClick={handleClick}
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
