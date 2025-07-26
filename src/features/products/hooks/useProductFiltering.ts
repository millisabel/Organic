import type { ProductCardData } from '@/features/products/model';
import { useMemo } from 'react';

export type CategoryFilterOption = string;

export const useProductFiltering = (
  products: ProductCardData[],
  selectedCategory: CategoryFilterOption,
) => {
  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'All Categories') {
      return products;
    }

    return products.filter((product) => product.category === selectedCategory);
  }, [products, selectedCategory]);

  return filteredProducts;
};
