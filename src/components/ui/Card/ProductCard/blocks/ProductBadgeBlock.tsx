import BadgeButton from '@/components/ui/Badge/BadgeButton';
import StatusBadge from '@/components/ui/Badge/StatusBadge';
import type { ProductBadgeBlockProps } from '../ProductCard.types';

const ProductBadgeBlock: React.FC<ProductBadgeBlockProps> = ({
  category,
  handleCategoryClick,
  product,
}) => {
  return (
    <>
      <div className="absolute top-5 left-5 z-10">
        <BadgeButton category={category} handleCategoryClick={handleCategoryClick} />
      </div>
      <div className="absolute top-5 right-5 z-10 flex items-center gap-2">
        {product.isOutOfStock ? (
          <StatusBadge type="outOfStock" />
        ) : (
          <>
            {product.isNew && <StatusBadge type="new" />}
            {product.oldPrice && product.oldPrice > product.price && <StatusBadge type="sale" />}
          </>
        )}
      </div>
    </>
  );
};

export default ProductBadgeBlock;
