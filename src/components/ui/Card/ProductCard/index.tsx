import React from 'react';

import ProductCardCompact from '@/components/ui/Card/ProductCard/ProductCardCompact';
import ProductCardDetailed from '@/components/ui/Card/ProductCard/ProductCardDetailed';
import { getImageUrl } from '@/utils/helpers';
import type { ProductData, ProductCardProps } from './types';

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  isInCart = false,
  isLoading = false,
  view = 'compact',
  quantity = 1,
  hiddenActionBlock = false,
  onAddToCart,
  onRemove,
  onCategoryClick,
  setQuantity,
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

  const handleAddToCart = (
    e: React.MouseEvent<HTMLButtonElement>,
    product: ProductData,
    quantity: number = 1,
  ) => {
    e.preventDefault();
    e.stopPropagation();
    if (onAddToCart) {
      onAddToCart(product, quantity);
    }
  };

  const handleRemove = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (onRemove) {
      onRemove(product);
    }
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
    imageName: product.imageUrl,
  };

  if (view === 'detailed') {
    return <ProductCardDetailed {...sharedProps} />;
  }
  return <ProductCardCompact {...sharedProps} hiddenActionBlock={hiddenActionBlock} />;
};

export default ProductCard;
