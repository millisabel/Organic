import { useElementVisibility } from '@/hooks/useElementVisibility';
import { useAppSelector } from '@/store/hooks';

/**
 * Hook for managing FloatingCartButton visibility and data
 * @returns Object with cart data and visibility state
 */
export const useFloatingCartButton = () => {
  const cartItems = useAppSelector((state) => state.cart.items);
  const headerVisible = useElementVisibility({ selector: 'header' });

  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const isVisible = totalCount > 0 && !headerVisible;

  return {
    count: totalCount,
    price: totalPrice,
    isVisible,
    hasItems: totalCount > 0,
    headerVisible,
  };
};
