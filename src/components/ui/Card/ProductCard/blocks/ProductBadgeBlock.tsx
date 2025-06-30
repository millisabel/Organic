import BadgeButton from '@/components/ui/Badge/BadgeButton';
import type { ProductBadgeBlockProps } from '../ProductCard.types';

const ProductBadgeBlock: React.FC<ProductBadgeBlockProps> = ({ category, handleCategoryClick }) => {
  return (
    <>
      <div className="absolute top-5 left-5 z-10">
        <BadgeButton category={category} handleCategoryClick={handleCategoryClick} />
      </div>
      <div className="absolute top-5 right-5 z-10"></div>
    </>
  );
};

export default ProductBadgeBlock;
