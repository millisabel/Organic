import type { SectionProps } from '@/components/layout/Section/types';
import type { ProductCardData } from '@/features/products/model';

export interface ProductSingleSectionProps extends SectionProps {
  product: ProductCardData;
}
