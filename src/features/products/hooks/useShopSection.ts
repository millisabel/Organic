import type { CategoryFilterOption } from '@/features/products/hooks/useProductFiltering';
import type { SortOption } from '@/features/products/hooks/useProductSorting';
import type { ProductCardData } from '@/features/products/model';
import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

interface UseShopSectionProps {
  products: ProductCardData[];
}

interface UseShopSectionReturn {
  // State
  currentSort: SortOption;
  searchedProducts: ProductCardData[];
  selectedCategory: CategoryFilterOption;

  // Handlers
  handleSortChange: (sortOption: SortOption) => void;
  handleCategoryChange: (category: CategoryFilterOption) => void;
  handleFilteredDataChange: (filteredData: ProductCardData[]) => void;
}

export const useShopSection = ({ products }: UseShopSectionProps): UseShopSectionReturn => {
  // Get category parameter from URL
  const [searchParams] = useSearchParams();
  const paramValue = searchParams.get('category');

  // State
  const [currentSort, setCurrentSort] = useState<SortOption>('default');
  const [searchedProducts, setSearchedProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilterOption>(
    paramValue || 'All Categories',
  );

  // Update selected category when URL parameter changes
  useEffect(() => {
    setSelectedCategory(paramValue || 'All Categories');
  }, [paramValue]);

  // Update searched products when products change
  useEffect(() => {
    setSearchedProducts(products);
  }, [products]);

  // Handlers
  const handleSortChange = (sortOption: SortOption) => {
    setCurrentSort(sortOption);
  };

  const handleCategoryChange = (category: CategoryFilterOption) => {
    setSelectedCategory(category);
  };

  const handleFilteredDataChange = useCallback((filteredData: ProductCardData[]) => {
    setSearchedProducts(filteredData);
  }, []);

  return {
    // State
    currentSort,
    searchedProducts,
    selectedCategory,

    // Handlers
    handleSortChange,
    handleCategoryChange,
    handleFilteredDataChange,
  };
};
