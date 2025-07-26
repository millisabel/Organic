import type { ProductCardData } from '@/features/products/model';

export interface CartItem extends ProductCardData {
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  loadingItems: (number | string)[];
}
