import { selectCartItems } from '@/features/cart/model';
import { useEffect } from 'react';
import { useAppSelector } from './hooks';

const CartPersistence = () => {
  const cartItems = useAppSelector(selectCartItems);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  return null;
};

export default CartPersistence;
