import type { SectionProps } from '@/components/layout/Section/types';
import type { ProductCardData } from '@/features/products/model';

export interface ShopSectionProps extends SectionProps {
  products: ProductCardData[];
  itemsPerPage?: number;
}
