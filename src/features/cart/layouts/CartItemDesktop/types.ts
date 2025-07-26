import type { CartItem } from '@/features/cart/model';

export interface CartItemDesktopProps {
  cartItems: CartItem[];
  handleQuantityChange: (id: string | number, quantity: number) => void;
  handleRemove: (id: string | number) => void;
}
