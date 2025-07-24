// Redux slice
export { default as productsReducer } from './productsSlice';
export {
  setProducts,
  setCategory,
  setSearchQuery,
  setCurrentPage,
  setLoading,
  setError,
  applyFilters,
} from './productsSlice';

// Types
export type { ProductsState, ProductFilters } from './types';

// Selectors
export {
  selectProductsItems,
  selectFilteredProducts,
  selectCategories,
  selectSelectedCategory,
  selectSearchQuery,
  selectCurrentPage,
  selectItemsPerPage,
  selectIsLoading,
  selectError,
  selectTotalPages,
  selectCurrentPageProducts,
  selectHasMoreProducts,
  selectProductById,
  selectRelatedProducts,
} from './selectors';
