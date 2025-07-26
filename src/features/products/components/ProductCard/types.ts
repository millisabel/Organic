import type { CardProps } from '@/components/ui/Card/types';
import type { ProductCardData } from '@/features/products/model';

export interface ProductCardProps extends CardProps {
  data: ProductCardData;
  view?: 'compact' | 'detailed';
}

export interface ProductCardCommonProps {
  data: ProductCardData;
  isInCart: boolean;
  isLoading: boolean;
  isOutOfStock?: boolean;
  isNew?: boolean;
  handleAddToCartClick: () => void;
  handleCategoryClick: () => void;
}

export interface ProductCardCompactProps extends ProductCardCommonProps {}

export interface ProductCardDetailedProps extends ProductCardCommonProps {
  quantity: number;
  setQuantity: (quantity: number) => void;
}
