import { selectCartItems } from '@/features/cart/model';
import { useAppSelector } from '@/store/hooks';
import { useMemo } from 'react';

export const useCartTotal = () => {
  const cartItems = useAppSelector(selectCartItems);
  return useMemo(() => cartItems.reduce((total, item) => total + item.quantity, 0), [cartItems]);
};
