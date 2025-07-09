import React from 'react';

import ProductCardCompact from '@/components/ui/Card/ProductCard/ProductCardCompact';
import ProductCardDetailed from '@/components/ui/Card/ProductCard/ProductCardDetailed';
import type { IProduct, IProductCardProps } from './ProductCard.types';
import { getImageUrl } from '@/utils/helpers';

const ProductCard: React.FC<IProductCardProps> = ({
  product,
  isInCart = false,
  isLoading = false,
  view = 'compact',
  quantity = 1,
  onAddToCart,
  onRemove,
  onCategoryClick,
  setQuantity,
  hiddenActionBlock = false,
}) => {
  const { isOutOfStock } = product;
  const imgUrl = getImageUrl('products', product.imageUrl);

  const handleCategoryClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (onCategoryClick) {
      onCategoryClick(product.category);
    }
  };

  const handleAddToCart = (product: IProduct, quantity: number = 1) => {
    onAddToCart(product, quantity);
  };

  const handleRemove = () => {
    onRemove(product);
  };

  let variant: 'isInCart' | 'isOutOfStock' | 'product' = 'product';
  if (isInCart) variant = 'isInCart';
  else if (isOutOfStock) variant = 'isOutOfStock';

  const sharedProps = {
    product,
    isInCart,
    isLoading,
    isOutOfStock,
    variant,
    quantity,
    imageUrl: imgUrl,
    handleCategoryClick,
    handleRemove,
    handleAddToCart,
    setQuantity,
  };

  if (view === 'detailed') {
    return <ProductCardDetailed {...sharedProps} />;
  }
  return <ProductCardCompact {...sharedProps} hiddenActionBlock={hiddenActionBlock} />;
};

export default ProductCard;
