import Section from '@/components/layout/Section/Section';
import ContentLayout from '@/components/patterns/ContentLayout';
import UiList from '@/components/patterns/UiList';
import Pagination from '@/components/shared/Navigation/Pagination';
import { SearchWithFilter } from '@/components/shared/SearchWithFilter';
import Button from '@/components/ui/Button/Button';
import CategoryFilter from '@/features/products/components/CategoryFilter/CategoryFilter';
import ProductCard from '@/features/products/components/ProductCard';
import ProductSorting from '@/features/products/components/ProductSorting';
import { useProductFiltering } from '@/features/products/hooks/useProductFiltering';
import { useProductSorting } from '@/features/products/hooks/useProductSorting';
import { useShopSection } from '@/features/products/hooks/useShopSection';
import type { ProductCardData } from '@/features/products/model';
import { usePaginationWithLoadMore, useScrollToElement } from '@/hooks';
import { useCallback, useEffect } from 'react';
import type { ShopSectionProps } from './types';

const ShopSection = ({ products, itemsPerPage, loadMoreItems, ...restProps }: ShopSectionProps) => {
  const { scrollToElement } = useScrollToElement();

  // State management hooks
  const {
    currentSort,
    searchedProducts,
    selectedCategory,
    handleSortChange,
    handleCategoryChange,
    handleFilteredDataChange,
  } = useShopSection({ products });

  const filteredProducts = useProductFiltering(searchedProducts, selectedCategory);
  const sortedProducts = useProductSorting(filteredProducts, currentSort);

  const {
    displayedItems: displayedProducts,
    currentPage,
    totalDisplayedCount,
    hasMoreItems: hasMoreProducts,
    totalPages,
    handleLoadMore,
    handlePageChange,
    resetPagination,
  } = usePaginationWithLoadMore<ProductCardData>({
    items: sortedProducts,
    itemsPerPage,
    loadMoreItems,
  });

  useEffect(() => {
    resetPagination();
  }, [sortedProducts, resetPagination]);

  const handlePageChangeWithScroll = useCallback(
    (pageNumber: number) => {
      handlePageChange(pageNumber);
      scrollToElement('[data-component="ShopSection"]');
    },
    [handlePageChange, scrollToElement],
  );

  return (
    <Section id="shop" paddingY="py-2" className="mb-20" dataComponent="ShopSection" {...restProps}>
      <ContentLayout variant="flexRow" align="end" className="py-10 px-4 mb-10 rounded-3xl">
        <ProductSorting currentSort={currentSort} onSortChange={handleSortChange} />
        <CategoryFilter
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />
        <SearchWithFilter<ProductCardData>
          data={products}
          searchFields={['title', 'description']}
          placeholder="Search products"
          aria-label="Search products by title or description"
          onFilteredDataChange={handleFilteredDataChange}
        />
      </ContentLayout>

      <UiList
        variant="gridCol_sm_2_lg_4"
        items={displayedProducts}
        className="gap-6 mb-10"
        renderItem={(item: ProductCardData) => <ProductCard key={item.id} data={item} />}
      />

      <div className="mt-12 flex flex-col items-center gap-8">
        {hasMoreProducts && (
          <Button variant="default" size="default" onClick={handleLoadMore} className="px-8 py-3">
            Load More ({totalDisplayedCount} of {sortedProducts.length})
          </Button>
        )}
        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChangeWithScroll}
          />
        )}
      </div>
    </Section>
  );
};

export default ShopSection;
