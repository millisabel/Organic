import type { RootState } from '@/store/store';

// Base selectors
export const selectProductsItems = (state: RootState) => state.products.items;
export const selectFilteredProducts = (state: RootState) => state.products.filteredItems;
export const selectCategories = (state: RootState) => state.products.categories;
export const selectSelectedCategory = (state: RootState) => state.products.selectedCategory;
export const selectSearchQuery = (state: RootState) => state.products.searchQuery;
export const selectCurrentPage = (state: RootState) => state.products.currentPage;
export const selectItemsPerPage = (state: RootState) => state.products.itemsPerPage;
export const selectIsLoading = (state: RootState) => state.products.isLoading;
export const selectError = (state: RootState) => state.products.error;

// Calculated selectors
export const selectTotalPages = (state: RootState) => {
  const { filteredItems, itemsPerPage } = state.products;
  return Math.ceil(filteredItems.length / itemsPerPage);
};

export const selectCurrentPageProducts = (state: RootState) => {
  const { filteredItems, currentPage, itemsPerPage } = state.products;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return filteredItems.slice(startIndex, endIndex);
};

export const selectHasMoreProducts = (state: RootState) => {
  const { filteredItems, currentPage, itemsPerPage } = state.products;
  return currentPage * itemsPerPage < filteredItems.length;
};

export const selectProductById = (state: RootState, productId: string | number) => {
  return state.products.items.find((p) => p.id.toString() === productId.toString());
};

export const selectRelatedProducts = (state: RootState, category: string, excludeId: number) => {
  return state.products.items
    .filter((p) => p.category === category && p.id !== excludeId)
    .slice(0, 4);
};
