import type { ProductCardData } from '@/components/shared/Card/ProductCard/types';

export interface CartItem extends ProductCardData {
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  loadingItems: (number | string)[];
}
