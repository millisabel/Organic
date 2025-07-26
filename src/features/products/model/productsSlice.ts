import type { ProductCardData, ProductFilters, ProductsState } from './types';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

const initialState: ProductsState = {
  items: [],
  filteredItems: [],
  categories: [],
  selectedCategory: null,
  searchQuery: '',
  currentPage: 1,
  itemsPerPage: 8,
  isLoading: false,
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<ProductCardData[]>) => {
      state.items = action.payload;
      state.filteredItems = action.payload;
      state.categories = Array.from(new Set(action.payload.map((p) => p.category)));
    },
    setCategory: (state, action: PayloadAction<string | null>) => {
      state.selectedCategory = action.payload;
      state.currentPage = 1;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
      state.currentPage = 1;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    applyFilters: (state, action: PayloadAction<ProductFilters>) => {
      const { category, search, sortBy, inStockOnly } = action.payload;

      let filtered = [...state.items];

      // Фильтр по категории
      if (category && category !== 'All Categories') {
        filtered = filtered.filter((p) => p.category === category);
      }

      // Фильтр по поиску
      if (search) {
        const searchLower = search.toLowerCase();
        filtered = filtered.filter(
          (p) =>
            p.title.toLowerCase().includes(searchLower) ||
            p.category.toLowerCase().includes(searchLower),
        );
      }

      // Фильтр по наличию
      if (inStockOnly) {
        filtered = filtered.filter((p) => !p.isOutOfStock);
      }

      // Сортировка
      if (sortBy) {
        switch (sortBy) {
          case 'name':
            filtered.sort((a, b) => a.title.localeCompare(b.title));
            break;
          case 'price-asc':
            filtered.sort((a, b) => a.price - b.price);
            break;
          case 'price-desc':
            filtered.sort((a, b) => b.price - a.price);
            break;
          case 'rating':
            filtered.sort((a, b) => b.rating - a.rating);
            break;
          case 'newest':
            filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
            break;
        }
      }

      state.filteredItems = filtered;
    },
  },
});

export const {
  setProducts,
  setCategory,
  setSearchQuery,
  setCurrentPage,
  setLoading,
  setError,
  applyFilters,
} = productsSlice.actions;

export default productsSlice.reducer;
