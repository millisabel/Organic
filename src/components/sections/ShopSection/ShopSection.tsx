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
import { forwardRef, useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import type { ShopSectionProps } from './types';

const ShopSection = forwardRef<HTMLElement, ShopSectionProps>((props, ref) => {
  const { products, itemsPerPage = 4, loadMoreItems = 4, ...restProps } = props;

  // Get category parameter from URL
  const [searchParams] = useSearchParams();
  const paramValue = searchParams.get('category');

  const [currentSort, setCurrentSort] = useState<SortOption>('default');
  const [searchedProducts, setSearchedProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilterOption>(
    paramValue || 'All Categories',
  );
  const [displayedProducts, setDisplayedProducts] = useState<ProductCardData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalDisplayedCount, setTotalDisplayedCount] = useState(0);

  const filteredProducts = useProductFiltering(searchedProducts, selectedCategory);
  const sortedProducts = useProductSorting(filteredProducts, currentSort);

  // Reset displayed products when filters change
  useEffect(() => {
    setDisplayedProducts(sortedProducts.slice(0, itemsPerPage));
    setCurrentPage(1);
    setTotalDisplayedCount(itemsPerPage);
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
      totalDisplayedCount,
      totalDisplayedCount + loadMoreItems,
    );
    setDisplayedProducts((prev) => [...prev, ...newProducts]);
    setTotalDisplayedCount(totalDisplayedCount + loadMoreItems);
    setCurrentPage(Math.ceil((totalDisplayedCount + loadMoreItems) / itemsPerPage));
  };

  const handlePageChange = (pageNumber: number) => {
    const newProducts = sortedProducts.slice(
      (pageNumber - 1) * itemsPerPage,
      pageNumber * itemsPerPage,
    );
    setDisplayedProducts(newProducts);
    setCurrentPage(pageNumber);
    setTotalDisplayedCount(pageNumber * itemsPerPage);
    // Scroll to top of section
    if (ref && typeof ref === 'object' && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const hasMoreProducts = totalDisplayedCount < sortedProducts.length;
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const remainingProducts = sortedProducts.length - totalDisplayedCount;

  return (
    <Section ref={ref} paddingY="py-2" className="mb-20" dataComponent="ShopSection" {...restProps}>
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
            Load More ({totalDisplayedCount} of {sortedProducts.length})
          </Button>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
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
