import hero_bg_page_shop from '@/assets/images/backgrounds/hero_schop.webp';
import Section from '@/components/layout/sectionLayouts/Section';
import SectionHeader from '@/components/layout/sectionLayouts/SectionHeader';
import HeroSection from '@/components/sections/HeroSection';
import ProductList from '@/components/sections/ProductList';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import Pagination from '@/components/shared/Pagination';
import { Button } from '@/components/ui/Button';
import { type IProduct } from '@/components/ui/Card/ProductCard/ProductCard.types';
import productsData from '@/data/products.json';
import { useEffect, useMemo, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const ITEMS_PER_PAGE = 8;

const ShopPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [displayedProducts, setDisplayedProducts] = useState<IProduct[]>([]);
  const [isPaginationVisible, setIsPaginationVisible] = useState(true);

  const params = new URLSearchParams(location.search);
  const search = params.get('search') || '';

  const productCategories = useMemo(() => {
    const categories = new Set(productsData.map((p) => p.category));
    return ['All Categories', ...Array.from(categories)];
  }, []);

  const filteredProducts = useMemo(() => {
    let result = productsData;
    if (selectedCategory && selectedCategory !== 'All Categories') {
      result = result.filter((p) => p.category === selectedCategory);
    }
    if (search) {
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(search.toLowerCase()) ||
          p.category.toLowerCase().includes(search.toLowerCase()),
      );
    }
    return result;
  }, [selectedCategory, search]);

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

  useEffect(() => {
    if (search) {
      const matchedCategory = productCategories.find(
        (cat) =>
          cat.toLowerCase() !== 'all categories' &&
          cat.toLowerCase().includes(search.toLowerCase()),
      );
      if (matchedCategory) {
        setSelectedCategory(matchedCategory);
      } else {
        setSelectedCategory('All Categories');
      }
    }
  }, [search, productCategories]);

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

    const params = new URLSearchParams(location.search);
    params.delete('search');
    params.set('category', categoryName || 'All Categories');
    navigate({ search: params.toString() }, { replace: true });
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
