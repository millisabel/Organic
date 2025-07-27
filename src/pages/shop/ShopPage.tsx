import hero_bg_page_shop from '@/assets/images/backgrounds/hero_schop.webp';
import HeroSection from '@/components/sections/HeroSection';
import productsData from '@/data/products.json';
import { ShopSection } from '@/features/products';
import { usePageScroll } from '@/hooks';

const ShopPage = () => {
  const { sectionRef } = usePageScroll({
    paramName: 'category',
    scrollOptions: { behavior: 'smooth', block: 'start' },
    delay: 100,
  });

  return (
    <>
      <HeroSection variant="banner" title="Shop" backgroundImageUrl={hero_bg_page_shop} />
      <ShopSection ref={sectionRef} products={productsData} />
    </>
  );
};

export default ShopPage;
