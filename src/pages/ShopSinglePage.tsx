import Section from '@/components/layout/sectionLayouts/Section';
import SectionHeader from '@/components/layout/sectionLayouts/SectionHeader';
import HeroSection from '@/components/sections/HeroSection';
import ProductList from '@/components/sections/ProductList';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { type IProduct } from '@/components/ui/Card/ProductCard/ProductCard.types';
import productsData from '@/data/products.json';
import { getImageUrl } from '@/utils/helpers';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAppSelector } from '@/store/hooks';
import { useCartActions } from '@/hooks/useCartActions';
import ProductCardDetailed from '@/components/ui/Card/ProductCard/ProductCardDetailed';

const ShopSinglePage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const { items: cartItems, loadingItems } = useAppSelector((state) => state.cart);
  const { handleAddToCart, handleRemove } = useCartActions();

  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setQuantity(1);
    window.scrollTo(0, 0);
  }, [productId]);

  const product = productsData.find((p) => p.id.toString() === productId) as IProduct;

  if (!product) {
    return (
      <Section className="text-center">
        <h1 className="text-3xl font-bold">Product not found!</h1>
      </Section>
    );
  }

  const isInCart = cartItems.some((item) => item.id === product.id);
  const isLoading = loadingItems.includes(product.id);

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Shop', path: '/shop' },
    { label: product.name },
  ];

  const relatedProducts = productsData
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <>
      <HeroSection
        variant="banner"
        title="Shop Single"
        bgImage={getImageUrl('backgrounds', 'page_shop_single.webp')}
      />

      <div className="container py-10 mx-auto">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      <Section className="pt-10">
        <ProductCardDetailed
          product={product}
          isInCart={isInCart}
          isLoading={isLoading}
          variant="product"
          mode="shopSingle"
          quantity={quantity}
          handleCategoryClick={() => {}}
          setQuantity={setQuantity}
          handleAddToCart={() => handleAddToCart(product, quantity)}
          handleRemove={() => handleRemove(product)}
        />
      </Section>

      <Section>
        <SectionHeader title="Related Products" />
        {relatedProducts.length > 0 ? (
          <ProductList products={relatedProducts} />
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
