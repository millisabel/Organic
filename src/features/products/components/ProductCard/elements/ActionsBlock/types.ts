export interface ActionsBlockProps {
  mode?: 'compact' | 'detailed';
  id?: number;
  quantity?: number;
  handleQuantityChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isInCart: boolean;
  isLoading: boolean;
  isOutOfStock: boolean;
  handleAddToCartClick: (e: React.MouseEvent) => void;
  handleRemoveClick: (e: React.MouseEvent) => void;
  className?: string;
}
