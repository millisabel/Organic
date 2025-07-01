import BadgeButton from '@/components/ui/Badge/BadgeButton';
import StatusBadge from '@/components/ui/Badge/StatusBadge';
import type { ProductBadgeBlockProps } from '../ProductCard.types';

const ProductBadgeBlock: React.FC<ProductBadgeBlockProps> = ({
  category,
  handleCategoryClick,
  isInCart = false,
  product,
}) => {
  return (
    <>
      <div className="absolute top-5 left-5 z-10">
        <BadgeButton category={category} handleCategoryClick={handleCategoryClick} />
      </div>
      <div className="absolute top-5 right-5 z-10 flex flex-col items-center gap-1 min-w-max justify-end">
        {product.isOutOfStock ? (
          <StatusBadge type="outOfStock" variant="outOfStock" />
        ) : (
          <>
            {isInCart && <StatusBadge type="inCart" variant="inCart" />}
            {product.isNew && <StatusBadge type="new" variant="new" />}
            {product.oldPrice && product.oldPrice > product.price && (
              <StatusBadge type="sale" variant="sale" />
            )}
          </>
        )}
      </div>
    </>
  );
};

export default ProductBadgeBlock;
