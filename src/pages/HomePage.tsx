import Hero from '@/components/shared/Hero';
import Newsletter from '@/components/shared/Newsletter';
import ProductCard, { type IProduct } from '@/components/shared/ProductCard';

import hero_bg_page_home from '@/assets/images/backgrounds/hero_bg_page_home.webp';
import CalabreseBroccoli from '@/assets/images/products/Calabrese_Broccoli.webp';

const HomePage = () => {
  const testProduct: IProduct = {
    id: 1,
    category: 'Vegetable',
    name: 'Calabrese Broccoli',
    price: 13.0,
    oldPrice: 20.0,
    imageUrl: CalabreseBroccoli,
    rating: 5,
  };

  return (
    <>
      <Hero
        variant="home"
        subtitle="100% Natural Food"
        title="Choose the best healthier way of life"
        backgroundImage={hero_bg_page_home}
      />
      <div className="container py-10">
        <ProductCard product={testProduct} />
      </div>
      <Newsletter />
    </>
  );
};

export default HomePage;
