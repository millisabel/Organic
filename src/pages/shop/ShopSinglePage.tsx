import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Section from '@/components/layout/Section/Section';
import SectionHeader from '@/components/layout/Section/SectionHeader';
import UiList from '@/components/patterns/UiList';
import HeroSection from '@/components/sections/HeroSection';
import Breadcrumbs from '@/components/shared/Navigation/Breadcrumbs/Breadcrumbs';
import Button from '@/components/ui/Button/Button';
import productsData from '@/data/products.json';
import heroImage from '@/assets/images/backgrounds/hero_shop_single.webp';
import ProductCard from '@/features/products/components/ProductCard/ProductCard';
import type { ProductCardData } from '@/features/products/model';

const ShopSinglePage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();

  const product = productsData.find((p) => p.id.toString() === productId) as
    | ProductCardData
    | undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  if (!product) {
    return (
      <Section className="text-center">
        <h1 className="text-3xl font-bold">Product not found!</h1>
      </Section>
    );
  }

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Shop', path: '/shop' },
    { label: product.title },
  ];

  const relatedProducts = productsData
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4) as ProductCardData[];
  return (
    <>
      <HeroSection id="hero" variant="banner" title="Shop Single" backgroundImageUrl={heroImage} />

      <div className="container py-10 mx-auto">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      <Section id="product" className="pt-10">
        <ProductCard data={product} view="detailed" />
      </Section>

      <Section id="related-products">
        <SectionHeader title="Related Products" className="text-center" />
        {relatedProducts.length > 0 ? (
          <UiList
            variant="gridCol_sm_2_lg_4"
            items={relatedProducts}
            className="gap-6"
            renderItem={(item, idx) => <ProductCard key={idx} data={item} />}
          />
        ) : (
          <p className="text-text-light text-center">
            There are no matching products, but we plan to have them soon.
          </p>
        )}
        <div className="text-center mt-10">
          <Button asChild variant="default" className="mx-auto">
            <Link to="/shop">Go to Shop</Link>
          </Button>
        </div>
      </Section>
    </>
  );
};

export default ShopSinglePage;
