import { type IProduct } from '@/components/shared/ProductCard';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface CartItem extends IProduct {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  loadingItems: (string | number)[];
}

const initialState: CartState = {
  items: [],
  loadingItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<{ product: IProduct; quantity: number }>) => {
      const { product, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.id === product.id);

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({ ...product, quantity });
      }
    },
    removeItem: (state, action: PayloadAction<number | string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    updateQuantity: (state, action: PayloadAction<{ id: number | string; quantity: number }>) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
    startLoading: (state, action: PayloadAction<string | number>) => {
      state.loadingItems.push(action.payload);
    },
    stopLoading: (state, action: PayloadAction<string | number>) => {
      state.loadingItems = state.loadingItems.filter((id) => id !== action.payload);
    },
  },
});

export const { addItem, removeItem, updateQuantity, startLoading, stopLoading } = cartSlice.actions;
export default cartSlice.reducer;
