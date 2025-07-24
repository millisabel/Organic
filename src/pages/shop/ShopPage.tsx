import hero_bg_page_shop from '@/assets/images/backgrounds/hero_schop.webp';
import HeroSection from '@/components/sections/HeroSection';
import { ShopSection } from '@/features/products';
import productsData from '@/data/products.json';

const ShopPage = () => {
  return (
    <>
      <HeroSection variant="banner" title="Shop" backgroundImageUrl={hero_bg_page_shop} />
      <ShopSection products={productsData} />
    </>
  );
};

export default ShopPage;
