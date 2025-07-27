import { useCartActions } from '@/features/cart/hooks';
import { selectIsItemInCart, selectIsItemLoading } from '@/features/cart/model';
import { useCategoryNavigation } from '@/hooks/useCategoryNavigation';
import { useAppSelector } from '@/store/hooks';
import { useState } from 'react';
import type { ProductCardProps } from './types';
import ProductCardCompact from './view/ProductCardCompact';
import ProductCardDetailed from './view/ProductCardDetailed';

const ProductCard = ({ data, view = 'compact', isAction = true }: ProductCardProps) => {
  const [quantity, setQuantity] = useState(1);
  const { handleAddToCart, handleRemoveFromCart } = useCartActions();
  const { navigateToCategory } = useCategoryNavigation();

  const isInCart = useAppSelector((state) => selectIsItemInCart(state, data.id));
  const isLoading = useAppSelector((state) => selectIsItemLoading(state, data.id));

  const { isOutOfStock, isNew } = data;
  const isSale = data.oldPrice && data.oldPrice > data.price;

  const handleAddToCartClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    handleAddToCart(data, quantity);
  };

  const handleCategoryClick = () => {
    navigateToCategory(data.category);
  };

  const handleRemoveClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    handleRemoveFromCart(data);
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(Math.max(1, parseInt(e.target.value, 10) || 1));
  };

  const commonProps = {
    data,
    isInCart,
    isLoading,
    isOutOfStock: !!isOutOfStock,
    isNew: !!isNew,
    isSale: !!isSale,
    isAction,
    handleAddToCartClick,
    handleCategoryClick,
    handleRemoveClick,
  };

  return view === 'compact' ? (
    <ProductCardCompact {...commonProps} />
  ) : (
    <ProductCardDetailed
      {...commonProps}
      quantity={quantity}
      handleQuantityChange={handleQuantityChange}
    />
  );
};

export default ProductCard;
