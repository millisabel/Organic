import type { ProductCardData } from '@/components/shared/Card/ProductCard/types';

export interface ProductsState {
  items: ProductCardData[];
  filteredItems: ProductCardData[];
  categories: string[];
  selectedCategory: string | null;
  searchQuery: string;
  currentPage: number;
  itemsPerPage: number;
  isLoading: boolean;
  error: string | null;
}

export interface ProductFilters {
  category?: string;
  search?: string;
  sortBy?: 'name' | 'price-asc' | 'price-desc' | 'rating' | 'newest';
  inStockOnly?: boolean;
}
