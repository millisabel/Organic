import { useCartActions } from '@/features/cart/hooks';
import { selectIsItemInCart, selectIsItemLoading } from '@/features/cart/model';
import { useCategoryNavigation } from '@/hooks/useCategoryNavigation';
import { useAppSelector } from '@/store/hooks';
import { useState } from 'react';
import type { ProductCardProps } from './types';
import ProductCardCompact from './view/ProductCardCompact';
import ProductCardDetailed from './view/ProductCardDetailed';

const ProductCard = ({ data, view = 'compact' }: ProductCardProps) => {
  const [quantity, setQuantity] = useState(1);
  const { handleAddToCart } = useCartActions();
  const { navigateToCategory } = useCategoryNavigation();

  const isInCart = useAppSelector((state) => selectIsItemInCart(state, data.id));
  const isLoading = useAppSelector((state) => selectIsItemLoading(state, data.id));

  const { isOutOfStock, isNew } = data;

  const handleAddToCartClick = () => {
    handleAddToCart(data, quantity);
  };

  const handleCategoryClick = () => {
    navigateToCategory(data.category);
  };

  const commonProps = {
    data,
    isInCart,
    isLoading,
    isOutOfStock,
    isNew,
    handleAddToCartClick,
    handleCategoryClick,
  };

  return view === 'compact' ? (
    <ProductCardCompact {...commonProps} />
  ) : (
    <ProductCardDetailed {...commonProps} quantity={quantity} setQuantity={setQuantity} />
  );
};

export default ProductCard;
