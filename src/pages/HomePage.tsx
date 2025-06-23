import Hero from '@/components/shared/Hero';
import Newsletter from '@/components/shared/Newsletter';
import ProductCard from '@/components/shared/ProductCard';

import hero_bg_page_home from '@/assets/images/backgrounds/hero_bg_page_home.webp';
import productsData from '@/data/products.json';
import { getImageUrl } from '@/utils/helpers';

const HomePage = () => {
  const productsToDisplay = productsData.slice(0, 4);

  return (
    <>
      <Hero
        variant="home"
        subtitle="100% Natural Food"
        title="Choose the best healthier way of life"
        backgroundImage={hero_bg_page_home}
      />
      <div className="container py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {productsToDisplay.map((product) => (
            <ProductCard
              key={product.id}
              product={{
                ...product,
                imageUrl: getImageUrl('products', product.imageUrl),
              }}
            />
          ))}
        </div>
      </div>
      <Newsletter />
    </>
  );
};

export default HomePage;
