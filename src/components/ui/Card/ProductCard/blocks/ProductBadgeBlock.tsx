import BadgeButton from '@/components/ui/Badge/BadgeButton';
import StatusBadge from '@/components/ui/Badge/StatusBadge';
import type { ProductBadgeBlockProps } from '../ProductCard.types';

const badgeContainerClasses = {
  compact: '',
  detailed: 'flex flex-row items-center lg:gap-10 gap-2 p-2 min-w-max justify-between',
};

const badgeCategoryClasses = {
  compact: 'absolute top-5 left-5',
  detailed: '',
};

const badgeStatusPosition = {
  compact: 'absolute top-5 right-5 z-10 flex flex-col items-center gap-2',
  detailed: 'flex flex-row items-center gap-2 p-2 min-w-max justify-end',
};

const ProductBadgeBlock: React.FC<ProductBadgeBlockProps> = ({
  category,
  handleCategoryClick,
  isInCart = false,
  product,
  view = 'compact',
}) => {
  return (
    <div className={`${badgeContainerClasses[view]}`}>
      <div className={`${badgeCategoryClasses[view]} z-10`}>
        <BadgeButton category={category} handleCategoryClick={handleCategoryClick} />
      </div>
      <div className={`${badgeStatusPosition[view]}`}>
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
    </div>
  );
};

export default ProductBadgeBlock;
