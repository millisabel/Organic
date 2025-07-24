import type { SectionProps } from '@/components/layout/Section/types';
import type { ProductCardData } from '@/components/shared/Card/ProductCard/types';

export interface OfferSectionProps extends SectionProps {
  products: ProductCardData[];
}
