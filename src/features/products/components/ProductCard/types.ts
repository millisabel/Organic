import type { CardProps } from '@/components/ui/Card/types';
import type { ProductCardData } from '@/features/products/model';

export interface ProductCardProps extends CardProps {
  data: ProductCardData;
  view?: 'compact' | 'detailed';
  isAction?: boolean;
}

export interface ProductCardCommonProps {
  data: ProductCardData;
  isInCart: boolean;
  isLoading: boolean;
  isOutOfStock: boolean;
  isSale: boolean;
  isNew: boolean;
  handleAddToCartClick: (e: React.MouseEvent) => void;
  handleRemoveClick: (e: React.MouseEvent) => void;
  handleCategoryClick: () => void;
}

export interface ProductCardCompactProps extends ProductCardCommonProps {
  isAction: boolean;
}

export interface ProductCardDetailedProps extends ProductCardCommonProps {
  quantity: number;
  handleQuantityChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
