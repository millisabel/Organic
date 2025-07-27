import React from 'react';
import { useParams } from 'react-router-dom';
import HeroSection from '@/components/sections/HeroSection';
import productsData from '@/data/products.json';
import heroImage from '@/assets/images/backgrounds/hero_shop_single.webp';
import type { ProductCardData } from '@/features/products/model';
import ProductSection from '@/components/sections/ProductSection/ProductSection';
import BreadcrumbsSection from '@/components/sections/BreadcrumbsSection/BreadcrumbsSection';
import ProductSingleSection from '@/components/sections/ProductSingleSection/ProductSingleSection';
import NotFoundSection from '@/components/sections/NotFoundSection/NotFoundSection';

const ShopSinglePage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();

  const product = productsData.find((p) => p.id.toString() === productId) as
    | ProductCardData
    | undefined;

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Shop', path: '/shop' },
    { label: product?.title || '' },
  ];

  const relatedProducts = productsData
    .filter((p) => p.category === product?.category && p.id !== product?.id)
    .slice(0, 4) as ProductCardData[];
  return (
    <>
      <HeroSection variant="banner" title="Shop Single" backgroundImageUrl={heroImage} />
      <BreadcrumbsSection items={breadcrumbItems} />
      {product ? <ProductSingleSection product={product} /> : <NotFoundSection />}
      <ProductSection title="Related Products" products={relatedProducts} />
    </>
  );
};

export default ShopSinglePage;
