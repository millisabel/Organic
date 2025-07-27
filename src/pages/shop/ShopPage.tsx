import hero_bg_page_shop from '@/assets/images/backgrounds/hero_schop.webp';
import HeroSection from '@/components/sections/HeroSection';
import productsData from '@/data/products.json';
import { ShopSection } from '@/features/products';

const ShopPage = () => {
  return (
    <>
      <HeroSection variant="banner" title="Shop" backgroundImageUrl={hero_bg_page_shop} />
      <ShopSection products={productsData} itemsPerPage={8} loadMoreItems={8} />
    </>
  );
};

export default ShopPage;
