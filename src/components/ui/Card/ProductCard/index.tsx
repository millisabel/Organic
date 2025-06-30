import React from 'react';

import ProductCardCompact from '@/components/ui/Card/ProductCard/ProductCardCompact';
import ProductCardDetailed from '@/components/ui/Card/ProductCard/ProductCardDetailed';
import type { IProduct, IProductCardProps } from './ProductCard.types';

const ProductCard: React.FC<IProductCardProps> = ({
  product,
  isInCart = false,
  isLoading = false,
  view = 'compact',
  onAddToCart,
  onRemove,
  onCategoryClick,
}) => {
  const { isOutOfStock } = product;

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
    handleCategoryClick,
    handleRemove,
    handleAddToCart,
  };

  if (view === 'detailed') {
    return <ProductCardDetailed {...sharedProps} />;
  }
  return <ProductCardCompact {...sharedProps} />;
};

export default ProductCard;
