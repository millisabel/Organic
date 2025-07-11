type mode = 'shopCompact' | 'shopSingle';
type view = 'compact' | 'detailed';
type variant = 'isInCart' | 'isOutOfStock' | 'product';

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
  isNew?: boolean;
  className?: string;
}

export interface IProductCardProps {
  product: IProduct;
  isInCart?: boolean;
  isLoading?: boolean;
  view?: view;
  imageUrl: string;
  quantity?: number;
  onAddToCart: (product: IProduct, quantity: number) => void;
  onRemove: (product: IProduct) => void;
  onCategoryClick?: (category: string) => void;
  setQuantity?: (quantity: number) => void;
  hiddenActionBlock?: boolean;
}

export interface ProductCardInternalProps
  extends Omit<IProductCardProps, 'view' | 'onAddToCart' | 'onRemove'> {
  isInCart: boolean;
  isLoading: boolean;
  isOutOfStock?: boolean;
  variant: variant;
  mode?: mode;
  quantity?: number;
  setQuantity?: (quantity: number) => void;
  handleAddToCart: (product: IProduct, quantity: number) => void;
  handleRemove: () => void;
  handleCategoryClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  hiddenActionBlock?: boolean;
}

export interface ProductBadgeBlockProps {
  category: string;
  product: IProduct;
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
  product: IProduct;
  isInCart: boolean;
  isLoading: boolean;
  isOutOfStock: boolean;
  quantity: number;
  mode: mode;
  hidden?: boolean;
  handleAddToCart: (product: IProduct, quantity: number) => void;
  handleRemove: () => void;
  setQuantity: (quantity: number) => void;
}
