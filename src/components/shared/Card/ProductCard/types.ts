import type { CardProps } from '@/components/ui/Card/types';

export interface ProductCardData {
  id: number;
  title: string;
  imageName: string;
  category: string;
  price: number;
  oldPrice?: number;
  description: string;
  rating: number;
  isOutOfStock?: boolean;
  isNew?: boolean;
}

export interface ProductCardProps extends CardProps {
  data: ProductCardData;
}
