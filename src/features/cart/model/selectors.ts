import type { RootState } from '@/store/store';

// Базовые селекторы
export const selectCartItems = (state: RootState) => state.cart.items;
export const selectLoadingItems = (state: RootState) => state.cart.loadingItems;

// Вычисляемые селекторы
export const selectCartItemsCount = (state: RootState) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0);

export const selectCartTotalPrice = (state: RootState) =>
  state.cart.items.reduce((total, item) => total + item.price * item.quantity, 0);

export const selectIsItemInCart = (state: RootState, itemId: number | string) =>
  state.cart.items.some((item) => item.id === itemId);

export const selectIsItemLoading = (state: RootState, itemId: number | string) =>
  state.cart.loadingItems.includes(itemId);
