export interface ProductCardData {
  id: number;
  title: string;
  imageName: string;
  category: string;
  price: number;
  oldPrice?: number;
  description: string;
  rating: number;
  isOutOfStock?: boolean;
  isNew?: boolean;
  imageSize: {
    width: number;
    height: number;
  };
  [key: string]: unknown;
}

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
  sortBy?: string;
  inStockOnly?: boolean;
}
