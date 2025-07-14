import type { IProduct } from '@/components/ui/Card/ProductCard/types';
import { addItem, removeItem, startLoading, stopLoading } from '@/store/cartSlice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useNavigate } from 'react-router-dom';

/**
 * @description Hook for handling cart actions.
 * @returns An object containing functions for adding items to the cart, removing items, and navigating to the shop page.
 */
export function useCartActions() {
  const dispatch = useAppDispatch();
  const { loadingItems } = useAppSelector((state) => state.cart);
  const navigate = useNavigate();

  const handleAddToCart = (product: IProduct, quantity: number = 1) => {
    if (loadingItems.includes(product.id)) return;
    dispatch(startLoading(product.id));
    setTimeout(() => {
      dispatch(addItem({ product, quantity }));
      dispatch(stopLoading(product.id));
    }, 1500);
  };

  const handleRemove = (product: IProduct) => {
    dispatch(removeItem(product.id));
  };

  const handleCategoryClick = (category: string) => {
    navigate(`/shop?category=${category}`);
  };

  return { handleAddToCart, handleRemove, handleCategoryClick };
}
