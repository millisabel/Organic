// Redux slice
export {
  applyFilters,
  default as productsReducer,
  setCategory,
  setCurrentPage,
  setError,
  setLoading,
  setProducts,
  setSearchQuery,
} from './productsSlice';

// Types
export type { ProductCardData, ProductFilters, ProductsState } from './types';

// Selectors
export {
  selectCategories,
  selectCurrentPage,
  selectCurrentPageProducts,
  selectError,
  selectFilteredProducts,
  selectHasMoreProducts,
  selectIsLoading,
  selectItemsPerPage,
  selectProductById,
  selectProductsItems,
  selectRelatedProducts,
  selectSearchQuery,
  selectSelectedCategory,
  selectTotalPages,
} from './selectors';
