import Section from '@/components/layout/Section/Section';
import ContentLayout from '@/components/patterns/ContentLayout';
import UiList from '@/components/patterns/UiList';
import Pagination from '@/components/shared/Navigation/Pagination';
import { SearchWithFilter } from '@/components/shared/SearchWithFilter';
import Button from '@/components/ui/Button/Button';
import CategoryFilter from '@/features/products/components/CategoryFilter/CategoryFilter';
import ProductCard from '@/features/products/components/ProductCard';
import ProductSorting from '@/features/products/components/ProductSorting';
import {
  useProductFiltering,
  type CategoryFilterOption,
} from '@/features/products/hooks/useProductFiltering';
import { useProductSorting, type SortOption } from '@/features/products/hooks/useProductSorting';
import type { ProductCardData } from '@/features/products/model';
import { usePageScroll } from '@/hooks';
import { forwardRef, useCallback, useEffect, useState } from 'react';
import type { ShopSectionProps } from './types';

const ShopSection = forwardRef<HTMLElement, ShopSectionProps>(
  ({ products, itemsPerPage = 4, loadMoreItems = 4, ...props }) => {
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
    const [displayedProducts, setDisplayedProducts] = useState<ProductCardData[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [isPaginationVisible, setIsPaginationVisible] = useState(true);

    const filteredProducts = useProductFiltering(searchedProducts, selectedCategory);
    const sortedProducts = useProductSorting(filteredProducts, currentSort);

    // Reset displayed products when filters change
    useEffect(() => {
      setDisplayedProducts(sortedProducts.slice(0, itemsPerPage));
      setCurrentPage(1);
      setIsPaginationVisible(true);
    }, [sortedProducts, itemsPerPage]);

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

    const handleLoadMore = () => {
      const newProducts = sortedProducts.slice(
        displayedProducts.length,
        displayedProducts.length + loadMoreItems,
      );
      setDisplayedProducts((prev) => [...prev, ...newProducts]);
      setIsPaginationVisible(false);
    };

    const handlePageChange = (pageNumber: number) => {
      console.log('currentPage', currentPage);
      const newProducts = sortedProducts.slice(
        (pageNumber - 1) * itemsPerPage,
        pageNumber * itemsPerPage,
      );
      setDisplayedProducts(newProducts);
      setCurrentPage(pageNumber);
      setIsPaginationVisible(true);
      // Scroll to top of section
      sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const hasMoreProducts = displayedProducts.length < sortedProducts.length;
    const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);

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
          items={displayedProducts}
          className="gap-6 mb-10"
          renderItem={(item: ProductCardData) => <ProductCard key={item.id} data={item} />}
        />

        <div className="mt-12 flex flex-col items-center gap-8">
          {/* Load More Button */}
          {hasMoreProducts && (
            <Button variant="outline" size="default" onClick={handleLoadMore} className="px-8 py-3">
              Load More ({displayedProducts.length} of {sortedProducts.length})
            </Button>
          )}

          {/* Pagination */}
          {isPaginationVisible && totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
              maxVisiblePages={5}
              showFirstLast={true}
            />
          )}
        </div>
      </Section>
    );
  },
);

ShopSection.displayName = 'ShopSection';

export default ShopSection;
