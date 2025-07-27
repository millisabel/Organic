import React from 'react';
import { useParams } from 'react-router-dom';
import Section from '@/components/layout/Section/Section';
import HeroSection from '@/components/sections/HeroSection';
import productsData from '@/data/products.json';
import heroImage from '@/assets/images/backgrounds/hero_shop_single.webp';
import ProductCard from '@/features/products/components/ProductCard/ProductCard';
import type { ProductCardData } from '@/features/products/model';
import ProductSection from '@/components/sections/ProductSection/ProductSection';
import BreadcrumbsSection from '@/components/sections/BreadcrumbsSection/BreadcrumbsSection';

const ShopSinglePage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();

  const product = productsData.find((p) => p.id.toString() === productId) as
    | ProductCardData
    | undefined;

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
      <BreadcrumbsSection items={breadcrumbItems} />
      <Section id="product" className="pt-10">
        <ProductCard data={product} view="detailed" />
      </Section>
      <ProductSection title="Related Products" products={relatedProducts} />
    </>
  );
};

export default ShopSinglePage;
