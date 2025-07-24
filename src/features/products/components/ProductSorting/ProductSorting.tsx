import Select from '@/components/shared/Select';
import type { SortOption } from '../../hooks/useProductSorting';
import type { ProductSortingProps } from './types';

const ProductSorting = ({ onSortChange, currentSort, className = '' }: ProductSortingProps) => {
  const sortOptions: { value: SortOption; label: string }[] = [
    { value: 'default', label: 'No sorting' },
    { value: 'name-asc', label: 'Name A-Z' },
    { value: 'name-desc', label: 'Name Z-A' },
    { value: 'price-asc', label: 'Price: Low to High' },
    { value: 'price-desc', label: 'Price: High to Low' },
    { value: 'rating-asc', label: 'Highest Rated' },
    { value: 'rating-desc', label: 'Lowest Rated' },
    { value: 'newest', label: 'Newest First' },
    { value: 'discount-first', label: 'Discount First' },
  ];

  return (
    <Select
      options={sortOptions}
      value={currentSort}
      onChange={onSortChange}
      placeholder="Sort by"
      className={className}
      aria-label="Sort products"
    />
  );
};

export default ProductSorting;
