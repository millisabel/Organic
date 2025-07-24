import hero_bg_page_shop from '@/assets/images/backgrounds/hero_schop.webp';
import HeroSection from '@/components/sections/HeroSection';
import productsData from '@/data/products.json';
import { ShopSection } from '@/features/products';
import { useSearchParams } from 'react-router-dom';

const ShopPage = () => {
  const [searchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get('category');

  return (
    <>
      <HeroSection variant="banner" title="Shop" backgroundImageUrl={hero_bg_page_shop} />
      <ShopSection products={productsData} initialCategory={categoryFromUrl || 'All Categories'} />
    </>
  );
};

export default ShopPage;
