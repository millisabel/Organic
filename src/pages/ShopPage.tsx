import hero_bg_page_shop from '@/assets/images/backgrounds/hero_bg_page_schop.webp';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import HeroSection from '@/components/shared/HeroSection';
import Pagination from '@/components/shared/Pagination';
import { type IProduct } from '@/components/shared/ProductCard';
import ProductList from '@/components/shared/ProductList';
import Section from '@/components/shared/Section';
import SectionHeader from '@/components/shared/SectionHeader';
import { Button } from '@/components/ui/Button';
import productsData from '@/data/products.json';
import { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';

const ITEMS_PER_PAGE = 8;

const ShopPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [displayedProducts, setDisplayedProducts] = useState<IProduct[]>([]);
  const [isPaginationVisible, setIsPaginationVisible] = useState(true);

  const location = useLocation();

  const productCategories = useMemo(() => {
    const categories = new Set(productsData.map((p) => p.category));
    return ['All Categories', ...Array.from(categories)];
  }, []);

  const filteredProducts = useMemo(() => {
    if (!selectedCategory || selectedCategory === 'All Categories') {
      return productsData;
    }
    return productsData.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const category = params.get('category');
    if (category && productCategories.includes(category)) {
      setSelectedCategory(category);
    } else {
      setSelectedCategory('All Categories');
    }
  }, [location.search, productCategories]);

  useEffect(() => {
    setDisplayedProducts(filteredProducts.slice(0, ITEMS_PER_PAGE));
    setCurrentPage(1);
    setIsPaginationVisible(true);
  }, [filteredProducts]);

  const handleLoadMore = () => {
    const newProducts = filteredProducts.slice(
      displayedProducts.length,
      displayedProducts.length + ITEMS_PER_PAGE,
    );
    setDisplayedProducts((prev) => [...prev, ...newProducts]);
    setIsPaginationVisible(false);
  };

  const handlePageChange = (pageNumber: number) => {
    const newProducts = filteredProducts.slice(
      (pageNumber - 1) * ITEMS_PER_PAGE,
      pageNumber * ITEMS_PER_PAGE,
    );
    setDisplayedProducts(newProducts);
    setCurrentPage(pageNumber);
    setIsPaginationVisible(true);
    window.scrollTo(0, 0);
  };

  const handleCategorySelect = (categoryName: string | null) => {
    setSelectedCategory(categoryName);
  };

  const breadcrumbItems = [{ label: 'Home', path: '/' }, { label: 'Shop' }];
  const hasMoreProducts = displayedProducts.length < filteredProducts.length;

  return (
    <>
      <HeroSection variant="banner" title="Shop" bgImage={hero_bg_page_shop} />
      <div className="container py-10">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      <Section className="text-center">
        <SectionHeader title="Choose a category" />
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {productCategories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => handleCategorySelect(category)}
              className="!rounded-full !px-6 !py-3"
            >
              {category}
            </Button>
          ))}
        </div>
      </Section>

      <Section className="!pt-0">
        <ProductList products={displayedProducts} />
        <div className="mt-12 flex flex-col items-center gap-8">
          {hasMoreProducts && (
            <Button onClick={handleLoadMore} variant="default">
              Load More
            </Button>
          )}
          {isPaginationVisible && filteredProducts.length > ITEMS_PER_PAGE && (
            <Pagination
              currentPage={currentPage}
              totalPages={Math.ceil(filteredProducts.length / ITEMS_PER_PAGE)}
              onPageChange={handlePageChange}
            />
          )}
        </div>
      </Section>
    </>
  );
};

export default ShopPage;
