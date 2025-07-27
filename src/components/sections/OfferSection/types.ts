import type { SectionProps } from '@/components/layout/Section/types';
import type { ProductCardData } from '@/features/products/model';

export interface OfferSectionProps extends SectionProps {
  products: ProductCardData[];
  itemsDisplay?: number | 'all';
}
