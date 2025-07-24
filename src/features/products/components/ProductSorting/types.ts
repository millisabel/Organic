import type { SortOption } from '../../hooks/useProductSorting';

export interface ProductSortingProps {
  currentSort: SortOption;
  onSortChange: (sortOption: SortOption) => void;
  className?: string;
}
