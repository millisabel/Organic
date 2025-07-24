import Select from '@/components/shared/Select';
import productsData from '@/data/products.json';
import { useMemo } from 'react';
import type { CategoryFilterProps } from './types';

const CategoryFilter = ({
  selectedCategory,
  onCategoryChange,
  className = '',
}: CategoryFilterProps) => {
  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(productsData.map((product) => product.category))];
    return ['All Categories', ...uniqueCategories];
  }, []);

  const categoryOptions = categories.map((category) => ({
    value: category,
    label: category,
  }));

  return (
    <Select
      options={categoryOptions}
      value={selectedCategory}
      onChange={onCategoryChange}
      placeholder="All Categories"
      defaultValue="All Categories"
      className={className}
      aria-label="Filter by category"
    />
  );
};

export default CategoryFilter;
