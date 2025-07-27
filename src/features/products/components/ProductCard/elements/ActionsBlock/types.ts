export interface ActionsBlockProps {
  mode?: 'compact' | 'detailed';
  id?: number;
  quantity?: number;
  isInCart: boolean;
  isLoading: boolean;
  isOutOfStock: boolean;
  className?: string;
  handleAddToCartClick: (e: React.MouseEvent) => void;
  handleRemoveClick: (e: React.MouseEvent) => void;
  handleQuantityChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
