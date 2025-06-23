import { useEffect } from 'react';
import { useAppSelector } from './hooks';

const CartPersistence = () => {
  const cartItems = useAppSelector((state) => state.cart.items);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  return null;
};

export default CartPersistence;
