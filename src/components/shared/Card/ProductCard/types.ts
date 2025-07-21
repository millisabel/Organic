import type { CardProps } from '@/components/ui/Card/types';

export interface ProductCardData {
  title: string;
  description: string;
  image: string;
  price: number;
  oldPrice: number;
  rating: number;
  category: string;
  isOutOfStock?: boolean;
  isNew?: boolean;
}

export interface ProductCardProps extends CardProps {
  data: ProductCardData;
}
