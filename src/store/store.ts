import { cartReducer } from '@/features/cart/model';
import { productsReducer } from '@/features/products/model';
import { searchReducer } from '@/features/search/model';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
    search: searchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
