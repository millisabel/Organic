import Section from '@/components/layout/Section/Section';
import ProductCard from '@/features/products/components/ProductCard/ProductCard';
import { useSectionWithScroll } from '@/hooks';
import { forwardRef } from 'react';
import type { ProductSingleSectionProps } from './types';

const ProductSingleSection = forwardRef<HTMLElement, ProductSingleSectionProps>(
  ({ product, ...props }, ref) => {
    const { sectionRef } = useSectionWithScroll(ref);

    return (
      <Section id="product" ref={sectionRef} className="pt-10" {...props}>
        <ProductCard data={product} view="detailed" />
      </Section>
    );
  },
);

export default ProductSingleSection;
