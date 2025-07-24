import type { SectionProps } from '@/components/layout/Section/types';
import type { ProductCardData } from '@/components/shared/Card/ProductCard/types';

export interface ProductSectionProps extends SectionProps {
  products: ProductCardData[];
  itemsDisplay?: number;
}
