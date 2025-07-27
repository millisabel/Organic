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
import { usePaginationWithLoadMore, useSectionWithScroll } from '@/hooks';
import { forwardRef, useCallback, useEffect } from 'react';
import type { ShopSectionProps } from './types';

const ShopSection = forwardRef<HTMLElement, ShopSectionProps>((props, ref) => {
  const { products, itemsPerPage, loadMoreItems, ...restProps } = props;

  // Pass ref directly to the hook - it handles everything!
  const { sectionRef, scrollToTop } = useSectionWithScroll(ref);

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
    remainingItems: remainingProducts,
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
      scrollToTop(); // Hook handles scrolling
    },
    [handlePageChange, scrollToTop],
  );

  return (
    <Section
      ref={sectionRef}
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
        {hasMoreProducts && (
          <Button variant="outline" size="default" onClick={handleLoadMore} className="px-8 py-3">
            Load More ({totalDisplayedCount} of {sortedProducts.length})
          </Button>
        )}

        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChangeWithScroll}
            maxVisiblePages={5}
            showFirstLast={true}
          />
        )}

        {hasMoreProducts && (
          <div className="text-sm text-gray-600">{remainingProducts} more products available</div>
        )}
      </div>
    </Section>
  );
});

ShopSection.displayName = 'ShopSection';

export default ShopSection;
