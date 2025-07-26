import type { CardProps } from '@/components/ui/Card/types';
import type { ProductCardData } from '@/features/products/model';

export interface ProductCardProps extends CardProps {
  data: ProductCardData;
}
