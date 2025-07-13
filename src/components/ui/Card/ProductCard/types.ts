import type { CardProps } from '../card.types';

type mode = 'shopCompact' | 'shopSingle';
export type cardView = 'compact' | 'detailed';
type status = 'default' | 'inCart' | 'outOfStock';

export interface ProductData {
  id: string | number;
  category: string;
  name: string;
  price: number;
  oldPrice?: number;
  imageUrl: string;
  rating: number; // 0-5
  isOutOfStock?: boolean;
  description?: string;
  isNew?: boolean;
}

export interface ProductCardProps extends CardProps {
  data: ProductData;
  cardView?: cardView;
  // isInCart?: boolean;
  // isLoading?: boolean;
  // quantity?: number;
  // onAddToCart: (product: ProductData, quantity: number) => void;
  // onRemove: (product: ProductData) => void;
  // onCategoryClick?: (category: string) => void;
  // setQuantity?: (quantity: number) => void;
  // hiddenActionBlock?: boolean;
}

export interface ProductCardInternalProps
  extends Omit<ProductCardProps, 'view' | 'onAddToCart' | 'onRemove'> {
  isInCart: boolean;
  isLoading: boolean;
  isOutOfStock?: boolean;
  status: status;
  mode?: mode;
  quantity?: number;
  setQuantity?: (quantity: number) => void;
  handleAddToCart: (
    e: React.MouseEvent<HTMLButtonElement>,
    product: ProductData,
    quantity: number,
  ) => void;
  handleRemove: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleCategoryClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  hiddenActionBlock?: boolean;
  imageName: string;
}

export interface ProductBadgeBlockProps {
  category: string;
  product: ProductData;
  isInCart: boolean;
  view?: cardView;
  handleCategoryClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface ProductActionBlockProps {
  product: ProductData;
  isInCart: boolean;
  isLoading: boolean;
  isOutOfStock: boolean;
  quantity: number;
  mode: mode;
  hidden?: boolean;
  handleAddToCart: (
    e: React.MouseEvent<HTMLButtonElement>,
    product: ProductData,
    quantity: number,
  ) => void;
  handleRemove: (e: React.MouseEvent<HTMLButtonElement>) => void;
  setQuantity: (quantity: number) => void;
}
