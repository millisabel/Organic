import hero_bg_page_shop from '@/assets/images/backgrounds/hero_bg_page_schop.webp';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import Hero from '@/components/shared/Hero';
import Pagination from '@/components/shared/Pagination';
import { type IProduct } from '@/components/shared/ProductCard';
import ProductList from '@/components/shared/ProductList';
import Section from '@/components/shared/Section';
import { Button } from '@/components/ui/Button';
import productsData from '@/data/products.json';
import { useEffect, useState } from 'react';

const ITEMS_PER_PAGE = 8;

const ShopPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [displayedProducts, setDisplayedProducts] = useState<IProduct[]>([]);
  const [isPaginationVisible, setIsPaginationVisible] = useState(true);

  const totalPages = Math.ceil(productsData.length / ITEMS_PER_PAGE);
  const hasMoreProducts = displayedProducts.length < productsData.length;

  useEffect(() => {
    const initialProducts = productsData.slice(0, ITEMS_PER_PAGE);
    setDisplayedProducts(initialProducts);
  }, []);

  const handleLoadMore = () => {
    const newProducts = productsData.slice(
      displayedProducts.length,
      displayedProducts.length + ITEMS_PER_PAGE,
    );
    setDisplayedProducts((prev) => [...prev, ...newProducts]);
    setIsPaginationVisible(false);
  };

  const handlePageChange = (pageNumber: number) => {
    const startIndex = (pageNumber - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    setDisplayedProducts(productsData.slice(startIndex, endIndex));
    setCurrentPage(pageNumber);
    setIsPaginationVisible(true);
    window.scrollTo(0, 0); // Scroll to top on page change
  };

  const breadcrumbItems = [{ label: 'Home', path: '/' }, { label: 'Shop' }];

  return (
    <>
      <Hero variant="banner" title="Shop" backgroundImage={hero_bg_page_shop} />
      <div className="container py-10">
        <Breadcrumbs items={breadcrumbItems} />
      </div>
      <Section className="!pt-0">
        <ProductList products={displayedProducts} />
        <div className="mt-12 flex flex-col items-center gap-8">
          {hasMoreProducts && (
            <Button onClick={handleLoadMore} variant="default">
              Load More
            </Button>
          )}
          {isPaginationVisible && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          )}
        </div>
      </Section>
    </>
  );
};

export default ShopPage;
