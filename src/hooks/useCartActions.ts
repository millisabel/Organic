import type { IProduct } from '@/components/ui/Card/ProductCard';
import { addItem, removeItem, startLoading, stopLoading } from '@/store/cartSlice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';

export function useCartActions() {
  const dispatch = useAppDispatch();
  const { loadingItems } = useAppSelector((state) => state.cart);

  const handleAddToCart = (product: IProduct) => {
    if (loadingItems.includes(product.id)) return;

    dispatch(startLoading(product.id));
    setTimeout(() => {
      dispatch(addItem({ product, quantity: 1 }));
      dispatch(stopLoading(product.id));
    }, 1500);
  };

  const handleRemove = (product: IProduct) => {
    dispatch(removeItem(product.id));
  };

  return { handleAddToCart, handleRemove };
}
