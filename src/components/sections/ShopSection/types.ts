import type { ProductCardData } from '@/features/products/model';

export interface ShopSectionProps {
  products: ProductCardData[];
  itemsPerPage: number;
  loadMoreItems: number;
}
