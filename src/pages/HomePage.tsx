import Hero from '@/components/shared/Hero';
import Newsletter from '@/components/shared/Newsletter';
import ProductCard from '@/components/shared/ProductCard';
import { useState } from 'react';

import hero_bg_page_home from '@/assets/images/backgrounds/hero_bg_page_home.webp';
import productsData from '@/data/products.json';
import { getImageUrl } from '@/utils/helpers';

const HomePage = () => {
  const [cartItems, setCartItems] = useState<number[]>([2]);
  const [loadingItems, setLoadingItems] = useState<number[]>([]);

  const handleAddToCart = (productId: string | number) => {
    // Prevent adding if it's already in the cart or currently loading
    if (
      typeof productId !== 'number' ||
      cartItems.includes(productId) ||
      loadingItems.includes(productId)
    ) {
      return;
    }

    setLoadingItems((prev) => [...prev, productId]);

    // Simulate API call
    setTimeout(() => {
      setCartItems((prev) => [...prev, productId]);
      setLoadingItems((prev) => prev.filter((id) => id !== productId));
    }, 1500);
  };

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
              isInCart={cartItems.includes(product.id as number)}
              isLoading={loadingItems.includes(product.id as number)}
              onAddToCart={() => handleAddToCart(product.id)}
            />
          ))}
        </div>
      </div>
      <Newsletter />
    </>
  );
};

export default HomePage;
