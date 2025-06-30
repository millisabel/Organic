import type { ProductCardInternalProps } from './index';

const ProductCardDetailed: React.FC<ProductCardInternalProps> = ({
  product,
  isInCart,
  isLoading,
  isOutOfStock,
  handleCategoryClick,
  handleRemove,
  handleAddToCart,
}) => {
  const { id, category, name, price, oldPrice, imageUrl, rating } = product;

  console.log(id);

  let variant: 'isInCart' | 'isOutOfStock' | 'product' = 'product';
  if (isInCart) variant = 'isInCart';
  else if (isOutOfStock) variant = 'isOutOfStock';

  return <div>ProductCardDetailed</div>;
};

export default ProductCardDetailed;
