export interface IProduct {
  id: string | number;
  category: string;
  name: string;
  price: number;
  oldPrice?: number;
  imageUrl: string;
  rating: number; // 0-5
  isOutOfStock?: boolean;
  description?: string;
  className?: string;
}

export interface IProductCardProps {
  product: IProduct;
  isInCart?: boolean;
  isLoading?: boolean;
  view?: 'compact' | 'detailed';
  onAddToCart: (product: IProduct, quantity: number) => void;
  onRemove: (product: IProduct) => void;
  onCategoryClick?: (category: string) => void;
}

export interface ProductCardInternalProps
  extends Omit<IProductCardProps, 'view' | 'onAddToCart' | 'onRemove'> {
  isInCart: boolean;
  isLoading: boolean;
  isOutOfStock?: boolean;
  variant: 'isInCart' | 'isOutOfStock' | 'product';
  mode?: 'shopSingle' | 'shopCompact';
  quantity?: number;
  setQuantity?: (quantity: number) => void;
  handleAddToCart: (product: IProduct, quantity: number) => void;
  handleRemove: () => void;
  handleCategoryClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface ProductBadgeBlockProps {
  category: string;
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
  mode?: 'shopCompact' | 'shopSingle';
}

export interface ProductActionBlockProps {
  isInCart: boolean;
  isLoading: boolean;
  isOutOfStock: boolean;
  quantity: number;
  mode: 'shopCompact' | 'shopSingle';
  handleAddToCart: () => void;
  handleRemove: () => void;
  setQuantity: (quantity: number) => void;
}
