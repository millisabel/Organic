import Section from '@/components/layout/Section/Section';
import type { SectionProps } from '@/components/layout/Section/types';
import ContentLayout from '@/components/patterns/ContentLayout';
import UiList from '@/components/patterns/UiList';
import LoadMoreButton from '@/components/shared/Button/LoadMoreButton';
import ProductCard from '@/components/shared/Card/ProductCard/ProductCard';
import type { ProductCardData } from '@/components/shared/Card/ProductCard/types';
import { SearchWithFilter } from '@/components/shared/SearchWithFilter';
import CategoryFilter from '@/features/products/components/CategoryFilter';
import ProductSorting from '@/features/products/components/ProductSorting';
import {
  useProductFiltering,
  type CategoryFilterOption,
} from '@/features/products/hooks/useProductFiltering';
import { useProductSorting, type SortOption } from '@/features/products/hooks/useProductSorting';
import { useLoadMore } from '@/hooks/useLoadMore';
import { useCallback, useEffect, useState } from 'react';

interface ShopSectionProps extends SectionProps {
  products: ProductCardData[];
  itemsPerPage?: number;
}

const ShopSection = ({ products, itemsPerPage = 8, ...props }: ShopSectionProps) => {
  const [currentSort, setCurrentSort] = useState<SortOption>('default');
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilterOption>('All Categories');
  const [searchedProducts, setSearchedProducts] = useState(products);

  const filteredProducts = useProductFiltering(searchedProducts, selectedCategory);
  const sortedProducts = useProductSorting(filteredProducts, currentSort);

  // Use LoadMore hook for pagination
  const { displayedItems, hasMore, isLoading, remainingCount, loadMore, reset } = useLoadMore({
    data: sortedProducts,
    itemsPerPage,
    initialItems: itemsPerPage,
  });

  const handleSortChange = (sortOption: SortOption) => {
    setCurrentSort(sortOption);
  };

  const handleCategoryChange = (category: CategoryFilterOption) => {
    setSelectedCategory(category);
  };

  const handleFilteredDataChange = useCallback((filteredData: ProductCardData[]) => {
    setSearchedProducts(filteredData);
  }, []);

  // Reset pagination when filtered/sorted data changes
  useEffect(() => {
    reset();
  }, [sortedProducts, reset]);

  return (
    <Section paddingY="py-2" className="mb-20" dataComponent="ShopSection" {...props}>
      <ContentLayout variant="flexRow" align="end" className="py-10 px-4 mb-10 rounded-3xl">
        <ProductSorting currentSort={currentSort} onSortChange={handleSortChange} />
        <CategoryFilter
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />
        <SearchWithFilter
          data={products}
          searchFields={['title', 'description']}
          placeholder="Search products"
          aria-label="Search products by title or description"
          onFilteredDataChange={handleFilteredDataChange}
        />
      </ContentLayout>

      <UiList
        variant="gridCol_sm_2_lg_4"
        items={displayedItems}
        className="gap-6 mb-20"
        renderItem={(item: ProductCardData) => <ProductCard key={item.id} data={item} />}
        itemsDisplay="all"
      />

      {/* Load More Button */}
      {hasMore && (
        <LoadMoreButton
          onLoadMore={loadMore}
          hasMore={hasMore}
          isLoading={isLoading}
          remainingCount={remainingCount}
          className="mb-20"
          children="Load More Products"
        />
      )}
    </Section>
  );
};

export default ShopSection;
