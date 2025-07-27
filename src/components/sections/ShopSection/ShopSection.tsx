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
import { usePaginationWithLoadMore, useScrollToTop } from '@/hooks';
import { forwardRef, useCallback, useEffect, useImperativeHandle, useRef } from 'react';
import type { ShopSectionProps } from './types';

const ShopSection = forwardRef<HTMLElement, ShopSectionProps>((props, ref) => {
  const { products, itemsPerPage, loadMoreItems, ...restProps } = props;

  // Create local ref for useScrollToTop
  const localRef = useRef<HTMLElement>(null);

  // Sync local ref with forwarded ref
  useImperativeHandle(ref, () => localRef.current!, []);

  // Use scrollToTop with the local ref
  const { scrollToTop } = useScrollToTop(localRef, {
    behavior: 'smooth',
    block: 'start',
  });

  // Use custom hooks for state management
  const {
    currentSort,
    searchedProducts,
    selectedCategory,
    handleSortChange,
    handleCategoryChange,
    handleFilteredDataChange,
  } = useShopSection({ products });

  // Apply filtering and sorting
  const filteredProducts = useProductFiltering(searchedProducts, selectedCategory);
  const sortedProducts = useProductSorting(filteredProducts, currentSort);

  // Use pagination hook with sorted products
  const {
    displayedItems: displayedProducts,
    currentPage,
    totalDisplayedCount,
    hasMoreItems: hasMoreProducts,
    totalPages,
    remainingItems: remainingProducts,
    handleLoadMore,
    handlePageChange,
    resetPagination,
  } = usePaginationWithLoadMore<ProductCardData>({
    items: sortedProducts,
    itemsPerPage,
    loadMoreItems,
  });

  // Reset pagination when sorted products change
  useEffect(() => {
    resetPagination();
  }, [sortedProducts, resetPagination]);

  // Enhanced handlers with scroll functionality
  const handleLoadMoreWithScroll = useCallback(() => {
    handleLoadMore();
  }, [handleLoadMore]);

  const handlePageChangeWithScroll = useCallback(
    (pageNumber: number) => {
      handlePageChange(pageNumber);
      // Scroll to top of section using our custom hook
      scrollToTop();
    },
    [handlePageChange, scrollToTop],
  );

  return (
    <Section
      ref={localRef}
      paddingY="py-2"
      className="mb-20"
      dataComponent="ShopSection"
      {...restProps}
    >
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
        {/* Load More Button */}
        {hasMoreProducts && (
          <Button
            variant="outline"
            size="default"
            onClick={handleLoadMoreWithScroll}
            className="px-8 py-3"
          >
            Load More ({totalDisplayedCount} of {sortedProducts.length})
          </Button>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChangeWithScroll}
            maxVisiblePages={5}
            showFirstLast={true}
          />
        )}

        {/* Info about remaining products */}
        {hasMoreProducts && (
          <div className="text-sm text-gray-600">{remainingProducts} more products available</div>
        )}
      </div>
    </Section>
  );
});

ShopSection.displayName = 'ShopSection';

export default ShopSection;
