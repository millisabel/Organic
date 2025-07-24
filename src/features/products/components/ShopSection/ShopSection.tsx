import Section from '@/components/layout/Section/Section';
import type { SectionProps } from '@/components/layout/Section/types';
import ContentLayout from '@/components/patterns/ContentLayout';
import UiList from '@/components/patterns/UiList';
import LoadMoreButton from '@/components/shared/Button/LoadMoreButton';
import ProductCard from '@/components/shared/Card/ProductCard/ProductCard';
import type { ProductCardData } from '@/components/shared/Card/ProductCard/types';
import Pagination from '@/components/shared/Navigation/Pagination';
import CategoryFilter from '@/features/products/components/CategoryFilter';
import ProductSorting from '@/features/products/components/ProductSorting';
import {
  useProductFiltering,
  type CategoryFilterOption,
} from '@/features/products/hooks/useProductFiltering';
import { useProductSorting, type SortOption } from '@/features/products/hooks/useProductSorting';
import SearchBar from '@/features/search/components/SearchBar';
import { useState } from 'react';

interface ShopSectionProps extends SectionProps {
  products: ProductCardData[];
}

const ShopSection = ({ products, ...props }: ShopSectionProps) => {
  const [currentSort, setCurrentSort] = useState<SortOption>('default');

  const [selectedCategory, setSelectedCategory] = useState<CategoryFilterOption>('All Categories');
  const filteredProducts = useProductFiltering(products, selectedCategory);
  const sortedProducts = useProductSorting(filteredProducts, currentSort);

  const handleSortChange = (sortOption: SortOption) => {
    setCurrentSort(sortOption);
  };

  const handleCategoryChange = (category: CategoryFilterOption) => {
    setSelectedCategory(category);
  };

  return (
    <Section paddingY="py-2" className="mb-20" dataComponent="ShopSection" {...props}>
      <ContentLayout
        variant="flexRow"
        align="end"
        className="py-10 px-4 mb-10 rounded-3xl bg-gray-100"
      >
        <ProductSorting currentSort={currentSort} onSortChange={handleSortChange} />
        <CategoryFilter
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />
        <SearchBar id="shop-search" placeholder="Search products" />
      </ContentLayout>

      <UiList
        variant="gridCol_sm_2_lg_4"
        items={sortedProducts}
        className="gap-6 mb-20"
        itemsDisplay={8}
        renderItem={(item: ProductCardData) => <ProductCard key={item.id} data={item} />}
      />
      <LoadMoreButton onLoadMore={() => {}} hasMore={true} className="mb-8" remainingCount={10} />
      <Pagination currentPage={1} totalPages={4} onPageChange={() => {}} className="mb-8" />
    </Section>
  );
};

export default ShopSection;
