import type { ProductCardData } from '@/features/products/model';
import {
  addItem,
  removeItem,
  selectLoadingItems,
  startLoading,
  stopLoading,
} from '@/features/cart/model';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useNavigate } from 'react-router-dom';

/**
 * @description Hook for handling cart actions.
 * @returns An object containing functions for adding items to the cart, removing items, and navigating to the shop page.
 */
export function useCartActions() {
  const dispatch = useAppDispatch();
  const loadingItems = useAppSelector(selectLoadingItems);
  const navigate = useNavigate();

  const handleAddToCart = (product: ProductCardData, quantity: number = 1) => {
    if (loadingItems.includes(product.id)) return;
    dispatch(startLoading(product.id));
    setTimeout(() => {
      dispatch(addItem({ product, quantity }));
      dispatch(stopLoading(product.id));
    }, 1500);
  };

  const handleRemoveFromCart = (product: ProductCardData) => {
    dispatch(removeItem(product.id));
  };

  const handleCategoryClick = (category: string) => {
    navigate(`/shop?category=${category}`);
  };

  return { handleAddToCart, handleRemoveFromCart, handleCategoryClick };
}
