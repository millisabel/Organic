// Redux slice
export {
  addItem,
  default as cartReducer,
  removeItem,
  startLoading,
  stopLoading,
  updateQuantity,
} from './cartSlice';

// Types
export type { CartItem, CartState } from './types';

// Selectors
export {
  selectCartItems,
  selectCartItemsCount,
  selectCartTotalPrice,
  selectIsItemInCart,
  selectIsItemLoading,
  selectLoadingItems,
} from './selectors';
