import Section from '@/components/layout/sectionLayouts/Section';
import SectionHeader from '@/components/layout/sectionLayouts/SectionHeader';
import UiList from '@/components/patterns/UiList';
import HeroSection from '@/components/sections/HeroSection';
import Breadcrumbs from '@/components/shared/Navigation/Breadcrumbs/Breadcrumbs';
import Button from '@/components/ui/Button/Button';
import ProductCard from '@/components/shared/Card/ProductCard/ProductCard';
import productsData from '@/data/products.json';
// import { useCartActions } from '@/hooks/useCartActions';
// import { useAppSelector } from '@/store/hooks';
import { getImageUrl } from '@/utils/helpers';
import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import type { ProductCardData } from '@/components/shared/Card/ProductCard/types';

const ShopSinglePage: React.FC = () => {
  // const { handleAddToCart, handleRemove, handleCategoryClick } = useCartActions();
  // const { items: cartItems, loadingItems } = useAppSelector((state) => state.cart);
  const { productId } = useParams<{ productId: string }>();
  const product = productsData.find(
    (p) => p.id.toString() === productId,
  ) as unknown as ProductCardData;
  // const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    // setQuantity(1);
    window.scrollTo(0, 0);
  }, [productId]);

  if (!product) {
    return (
      <Section className="text-center">
        <h1 className="text-3xl font-bold">Product not found!</h1>
      </Section>
    );
  }

  // const isInCart = cartItems.some((item) => item.id === product.id);
  // const isLoading = loadingItems.includes(product.id);

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Shop', path: '/shop' },
    // { label: product.name },
  ];

  const relatedProducts = productsData;
  // .filter((p) => p.category === product.category && p.id !== product.id)
  // .slice(0, 4);
  return (
    <>
      <HeroSection
        variant="banner"
        title="Shop Single"
        bgImage={getImageUrl('backgrounds', 'hero_shop_single.webp')}
      />

      <div className="container py-10 mx-auto">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      <Section className="pt-10">
        <ProductCard
          data={product}
          // cardView="detailed"
          // imageUrl={product.imageUrl}
          // product={product}
          // quantity={quantity}
          // isInCart={isInCart}
          // isLoading={isLoading}
          // onAddToCart={(product, quantity) => handleAddToCart(product, quantity)}
          // onRemove={() => handleRemove(product)}
          // onCategoryClick={(category) => handleCategoryClick(category)}
          // setQuantity={setQuantity}
        />
      </Section>

      <Section>
        <SectionHeader title="Related Products" />
        {relatedProducts.length > 0 ? (
          <UiList
            variant="grid"
            items={relatedProducts}
            renderItem={(item, idx) => (
              <ProductCard key={idx} data={item as unknown as ProductCardData} />
            )}
          />
        ) : (
          <p className="text-text-light text-center">
            There are no matching products, but we plan to have them soon.
          </p>
        )}
        <div className="text-center mt-10">
          <Button asChild variant="default">
            <Link to="/shop">Go to Shop</Link>
          </Button>
        </div>
      </Section>
    </>
  );
};

export default ShopSinglePage;
