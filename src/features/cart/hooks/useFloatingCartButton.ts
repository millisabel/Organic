import { selectCartItemsCount, selectCartTotalPrice } from '@/features/cart/model';
import { useElementVisibility } from '@/hooks/useElementVisibility';
import { useAppSelector } from '@/store/hooks';

/**
 * Hook for managing FloatingCartButton visibility and data
 * @returns Object with cart data and visibility state
 */
export const useFloatingCartButton = () => {
  const totalCount = useAppSelector(selectCartItemsCount);
  const totalPrice = useAppSelector(selectCartTotalPrice);
  const headerVisible = useElementVisibility({ selector: 'header' });

  const isVisible = totalCount > 0 && !headerVisible;

  return {
    count: totalCount,
    price: totalPrice,
    isVisible,
    hasItems: totalCount > 0,
    headerVisible,
  };
};
