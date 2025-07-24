import type { ProductCardData } from '@/components/shared/Card/ProductCard/types';
import { useMemo } from 'react';

export type CategoryFilterOption = string;

export const useProductFiltering = (
  products: ProductCardData[],
  selectedCategory: CategoryFilterOption,
) => {
  const filteredProducts = useMemo(() => {
    // Если выбрана "All Categories" - показываем все товары
    if (selectedCategory === 'All Categories') {
      return products;
    }

    // Фильтруем товары по выбранной категории
    return products.filter((product) => product.category === selectedCategory);
  }, [products, selectedCategory]);

  return filteredProducts;
};
