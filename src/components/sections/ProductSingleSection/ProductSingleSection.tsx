import Section from '@/components/layout/Section/Section';
import ProductCard from '@/features/products/components/ProductCard/ProductCard';
import type { ProductSingleSectionProps } from './types';

const ProductSingleSection = ({ product, ...props }: ProductSingleSectionProps) => {
  return (
    <Section id="product" className="pt-10" {...props}>
      <ProductCard data={product} view="detailed" />
    </Section>
  );
};

export default ProductSingleSection;
