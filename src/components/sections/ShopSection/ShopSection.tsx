import Section from '@/components/layout/Section/Section';
import ContentLayout from '@/components/patterns/ContentLayout';
import UiList from '@/components/patterns/UiList';
import Pagination from '@/components/shared/Navigation/Pagination';
import { SearchWithFilter } from '@/components/shared/SearchWithFilter';
import CategoryFilter from '@/features/products/components/CategoryFilter/CategoryFilter';
import ProductCard from '@/features/products/components/ProductCard';
import ProductSorting from '@/features/products/components/ProductSorting';
import {
  useProductFiltering,
  type CategoryFilterOption,
} from '@/features/products/hooks/useProductFiltering';
import { useProductSorting, type SortOption } from '@/features/products/hooks/useProductSorting';
import type { ProductCardData } from '@/features/products/model';
import { usePageScroll, usePagination } from '@/hooks';
import { forwardRef, useCallback, useEffect, useState } from 'react';
import type { ShopSectionProps } from './types';

const ShopSection = forwardRef<HTMLElement, ShopSectionProps>(
  ({ products, itemsPerPage = 8, ...props }) => {
    // All hooks must be at the top - no regular variables between hooks
    const { sectionRef, paramValue } = usePageScroll({
      paramName: 'category',
      scrollOptions: { behavior: 'smooth', block: 'start' },
      delay: 100,
    });
    const [currentSort, setCurrentSort] = useState<SortOption>('default');
    const [searchedProducts, setSearchedProducts] = useState(products);
    const [selectedCategory, setSelectedCategory] = useState<CategoryFilterOption>(
      paramValue || 'All Categories',
    );
    const filteredProducts = useProductFiltering(searchedProducts, selectedCategory);
    const sortedProducts = useProductSorting(filteredProducts, currentSort);
    // Use pagination hook
    const {
      currentPage,
      totalPages,
      paginatedItems: paginatedProducts,
      handlePageChange,
      resetToFirstPage,
      hasPagination,
    } = usePagination({
      items: sortedProducts,
      itemsPerPage,
    });

    // Reset to first page when filters change
    useEffect(() => {
      resetToFirstPage();
    }, [selectedCategory, currentSort, searchedProducts, resetToFirstPage]);

    // Update selected category when URL parameter changes
    useEffect(() => {
      setSelectedCategory(paramValue || 'All Categories');
    }, [paramValue]);

    const handleSortChange = (sortOption: SortOption) => {
      setCurrentSort(sortOption);
    };

    const handleCategoryChange = (category: CategoryFilterOption) => {
      setSelectedCategory(category);
    };

    const handleFilteredDataChange = useCallback((filteredData: ProductCardData[]) => {
      setSearchedProducts(filteredData);
    }, []);

    const handlePageChangeWithScroll = (page: number) => {
      handlePageChange(page, () => {
        // Scroll to top of section when page changes
        sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    };

    return (
      <Section
        ref={sectionRef}
        paddingY="py-2"
        className="mb-20"
        dataComponent="ShopSection"
        {...props}
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
          items={paginatedProducts}
          className="gap-6 mb-10"
          renderItem={(item: ProductCardData) => <ProductCard key={item.id} data={item} />}
        />

        {/* Pagination */}
        {hasPagination && (
          <div className="flex justify-center mt-10">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChangeWithScroll}
              maxVisiblePages={5}
              showFirstLast={true}
            />
          </div>
        )}
      </Section>
    );
  },
);

ShopSection.displayName = 'ShopSection';

export default ShopSection;
