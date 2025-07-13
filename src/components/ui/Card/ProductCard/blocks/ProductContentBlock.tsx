import ProductPrice from '@/components/ui/Card/ProductCard/blocks/ProductPrice';
import Rating from '@/components/ui/Rating';
import type { cardView } from '@/components/ui/Card/ProductCard/types';
import HeaderContent from '@/components/shared/HeaderContent';

export interface ProductContentBlockProps {
  cardView?: cardView;
  name: string;
  price: number;
  oldPrice?: number;
  rating?: number;
  description?: string;
}

const contentStylesVariants = {
  compact: 'flex justify-between items-center',
  detailed: 'flex flex-col my-4',
};

const descriptionStyle = 'text-neutral-500 mb-8 mt-4';

const ProductContentBlock: React.FC<ProductContentBlockProps> = ({
  cardView = 'compact',
  name,
  price,
  oldPrice,
  rating,
  description,
}) => {
  const contentClass = contentStylesVariants[cardView];
  return (
    <>
      <HeaderContent
        text={name}
        level={cardView === 'detailed' ? 2 : 3}
        size={cardView === 'detailed' ? 'h2' : 'h5'}
        font={cardView === 'compact' ? 'semibold' : 'default'}
        border={cardView === 'compact' ? 'bottom' : 'default'}
      />
      <div className={contentClass}>
        {rating && (
          <Rating rating={rating} className={cardView === 'detailed' ? 'mb-4' : 'order-last'} />
        )}
        <ProductPrice price={price} oldPrice={oldPrice} />
        {description && cardView === 'detailed' && (
          <p className={descriptionStyle}>{description}</p>
        )}
      </div>
    </>
  );
};

export default ProductContentBlock;
