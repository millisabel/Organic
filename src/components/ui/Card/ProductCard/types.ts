type mode = 'shopCompact' | 'shopSingle';
type view = 'compact' | 'detailed';
type variant = 'isInCart' | 'isOutOfStock' | 'product';

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

export interface ProductCardProps {
  product: ProductData;
  isInCart?: boolean;
  isLoading?: boolean;
  view?: view;
  imageUrl: string;
  quantity?: number;
  onAddToCart: (product: ProductData, quantity: number) => void;
  onRemove: (product: ProductData) => void;
  onCategoryClick?: (category: string) => void;
  setQuantity?: (quantity: number) => void;
  hiddenActionBlock?: boolean;
}

export interface ProductCardInternalProps
  extends Omit<ProductCardProps, 'view' | 'onAddToCart' | 'onRemove'> {
  isInCart: boolean;
  isLoading: boolean;
  isOutOfStock?: boolean;
  variant: variant;
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
  view?: view;
  handleCategoryClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface ProductImageBlockProps {
  imageUrl: string;
  name: string;
  classNameParent?: string;
  classNameImage?: string;
}

export interface ProductContentBlockProps {
  name: string;
  price: number;
  oldPrice?: number;
  rating?: number;
  description?: string;
  mode?: mode;
  className?: string;
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
