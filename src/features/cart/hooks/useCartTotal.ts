import { useAppSelector } from '@/store/hooks';
import { useMemo } from 'react';

export const useCartTotal = () => {
  const cartItems = useAppSelector((state) => state.cart.items);
  return useMemo(() => cartItems.reduce((total, item) => total + item.quantity, 0), [cartItems]);
};
