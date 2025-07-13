import React from 'react';

// import ProductCardCompact from '@/components/ui/Card/ProductCard/ProductCardCompact';
// import ProductCardDetailed from '@/components/ui/Card/ProductCard/ProductCardDetailed';
// import { getImageUrl } from '@/utils/helpers';
import type { ProductCardProps } from './types';
import Card from '..';
import ProductContentBlock from './blocks/ProductContentBlock';
import { useNavigate } from 'react-router-dom';
// import ProductBadgeBlock from './blocks/ProductBadgeBlock';
// import ProductActionBlock from './blocks/ProductActionBlock';

const productStatusVariants = {
  default: '',
  inCart: 'border-green-500',
  outOfStock: 'opacity-50 pointer-events-none grayscale',
};

const ProductCard: React.FC<ProductCardProps> = ({ data, cardView = 'compact' }) => {
  console.log('data', data);

  const isOutOfStock = data.isOutOfStock;

  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate(`/shop/${data.id}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      navigate(`/shop/${data.id}`);
    }
  };

  const variant = cardView === 'compact' ? 'product' : 'productDetailed';

  return (
    <Card
      variant={variant}
      tabIndex={0}
      imgProps={{ name: data.imageUrl, folder: 'products' }}
      className={isOutOfStock ? productStatusVariants.outOfStock : ''}
      imgClassName="w-[600px] aspect-square bg-background rounded-[30px]"
      contentClassName={cardView === 'detailed' ? 'flex-1 justify-start m-auto' : ''}
      onClick={cardView === 'compact' ? handleCardClick : undefined}
      onKeyDown={cardView === 'compact' ? handleKeyDown : undefined}
    >
      <>
        <ProductContentBlock {...data} cardView={cardView} />
        {/* <ProductActionBlock
          mode={view === 'detailed' ? 'shopSingle' : 'shopCompact'}
        /> */}
      </>
    </Card>
  );
};

export default ProductCard;

// const handleCategoryClick = (e: React.MouseEvent<HTMLButtonElement>) => {
//   e.preventDefault();
//   e.stopPropagation();
//   if (onCategoryClick) {
//     onCategoryClick(product.category);
//   }
// };

// const handleAddToCart = (

//   e: React.MouseEvent<HTMLButtonElement>,
//   product: ProductData,
//   quantity: number = 1,
// ) => {
//   e.preventDefault();
//   e.stopPropagation();
//   if (onAddToCart) {
//     onAddToCart(product, quantity);
//   }
// };

// const handleRemove = (e: React.MouseEvent<HTMLButtonElement>) => {
//   e.preventDefault();
//   e.stopPropagation();
//   if (onRemove) {
//     onRemove(product);
//   }
// };

// const sharedProps = {
//   product,
//   isInCart,
//   isLoading,
//   isOutOfStock,
//   variant,
//   quantity,
//   imageUrl: imgUrl,
//   handleCategoryClick,
//   handleRemove,
//   handleAddToCart,
//   setQuantity,
//   hiddenActionBlock,
//   imageName: product.imageUrl,
// };

// if (view === 'detailed') {
//   return <ProductCardDetailed {...sharedProps} />;
// }
// return <ProductCardCompact {...sharedProps} hiddenActionBlock={hiddenActionBlock} />;
