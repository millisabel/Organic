import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import ProductCardCompact from '@/components/ui/Card/ProductCard/ProductCardCompact';
import ProductCardDetailed from '@/components/ui/Card/ProductCard/ProductCardDetailed';
import { removeItem } from '@/store/cartSlice';

export interface IProduct {
  id: string | number;
  category: string;
  name: string;
  price: number;
  oldPrice?: number;
  imageUrl: string;
  rating: number; // 0-5
  isOutOfStock?: boolean;
  description?: string;
}

export interface IProductCardProps {
  product: IProduct;
  isInCart?: boolean;
  isLoading?: boolean;
  view?: 'compact' | 'detailed';
  onAddToCart: (product: IProduct) => void;
  onRemove: (product: IProduct) => void;
}

export interface ProductCardInternalProps
  extends Omit<IProductCardProps, 'view' | 'onAddToCart' | 'onRemove'> {
  isInCart: boolean;
  isLoading: boolean;
  isOutOfStock?: boolean;
  handleCategoryClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleRemove: () => void;
  handleAddToCart: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const ProductCard: React.FC<IProductCardProps> = ({
  product,
  view = 'compact',
  isInCart = false,
  isLoading = false,
  onAddToCart,
}) => {
  const { category, isOutOfStock } = product;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCategoryClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    navigate(`/shop?category=${category}`);
  };

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    onAddToCart(product);
  };

  const handleRemove = () => {
    dispatch(removeItem(product.id));
  };

  let variant: 'isInCart' | 'isOutOfStock' | 'product' = 'product';
  if (isInCart) variant = 'isInCart';
  else if (isOutOfStock) variant = 'isOutOfStock';

  const sharedProps = {
    product,
    isInCart,
    isLoading,
    isOutOfStock,
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
