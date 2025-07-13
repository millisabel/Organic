import ProductPrice from '@/components/ui/Card/ProductCard/blocks/ProductPrice';
import Rating from '@/components/ui/Rating';
import { cn } from '@/utils/helpers';
import type { ProductContentBlockProps } from '../types';

const ProductContentBlock: React.FC<ProductContentBlockProps> = ({
  name,
  price,
  oldPrice,
  rating,
  mode = 'shopCompact',
  description,
  className,
}) => {
  return mode === 'shopCompact' ? (
    <div className={cn('p-5 bg-transparent', className)}>
      <h3 className="text-xl font-semibold font-roboto text-primary mb-3 h-14 border-b border-neutral-300">
        {name}
      </h3>
      <div className="flex justify-between items-center">
        <ProductPrice price={price} oldPrice={oldPrice} />
        {rating && <Rating rating={rating} />}
      </div>
    </div>
  ) : (
    <div>
      <h2 className="text-4xl font-bold text-primary">{name}</h2>
      <div className="my-4">
        {rating && <Rating rating={rating} className="mb-4" />}
        <ProductPrice price={price} oldPrice={oldPrice} />
        {description && <p className="text-neutral-500 mb-8 mt-4">{description}</p>}
      </div>
    </div>
  );
};

export default ProductContentBlock;
