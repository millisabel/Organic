import type { ProductCardData } from '@/features/products/model';
import { useMemo } from 'react';

export type SortOption =
  | 'default'
  | 'name-asc'
  | 'name-desc'
  | 'price-asc'
  | 'price-desc'
  | 'rating-asc'
  | 'rating-desc'
  | 'newest'
  | 'discount-first';

export const useProductSorting = (products: ProductCardData[], sortBy: SortOption) => {
  const sortedProducts = useMemo(() => {
    const sorted = [...products];

    const isProductAvailable = (product: ProductCardData) => !product.isOutOfStock;
    const sortWithAvailability = (
      a: ProductCardData,
      b: ProductCardData,
      sortFunction: (a: ProductCardData, b: ProductCardData) => number,
    ) => {
      const aAvailable = isProductAvailable(a);
      const bAvailable = isProductAvailable(b);

      if (aAvailable === bAvailable) {
        return sortFunction(a, b);
      }
      return aAvailable ? -1 : 1;
    };

    switch (sortBy) {
      case 'default':
        return sorted.sort((a, b) => sortWithAvailability(a, b, () => 0));

      case 'name-asc':
        return sorted.sort((a, b) =>
          sortWithAvailability(a, b, (a, b) => a.title.localeCompare(b.title)),
        );

      case 'name-desc':
        return sorted.sort((a, b) =>
          sortWithAvailability(a, b, (a, b) => b.title.localeCompare(a.title)),
        );

      case 'price-asc':
        return sorted.sort((a, b) => sortWithAvailability(a, b, (a, b) => a.price - b.price));

      case 'price-desc':
        return sorted.sort((a, b) => sortWithAvailability(a, b, (a, b) => b.price - a.price));

      case 'rating-asc':
        return sorted.sort((a, b) => sortWithAvailability(a, b, (a, b) => a.rating - b.rating));

      case 'rating-desc':
        return sorted.sort((a, b) => sortWithAvailability(a, b, (a, b) => b.rating - a.rating));

      case 'newest':
        return sorted.sort((a, b) =>
          sortWithAvailability(a, b, (a, b) => {
            if (a.isNew && !b.isNew) return -1;
            if (!a.isNew && b.isNew) return 1;
            return 0;
          }),
        );

      case 'discount-first':
        return sorted.sort((a, b) =>
          sortWithAvailability(a, b, (a, b) => {
            const getDiscountPercent = (product: ProductCardData) => {
              if (!product.oldPrice) return 0;
              return ((product.oldPrice - product.price) / product.oldPrice) * 100;
            };

            const discountA = getDiscountPercent(a);
            const discountB = getDiscountPercent(b);

            if ((discountA > 0 && discountB > 0) || (discountA === 0 && discountB === 0)) {
              return discountB - discountA;
            }

            if (discountA > 0 && discountB === 0) return -1;
            if (discountA === 0 && discountB > 0) return 1;

            return 0;
          }),
        );

      default:
        return sorted;
    }
  }, [products, sortBy]);

  return sortedProducts;
};
