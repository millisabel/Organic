export interface AddToCartButtonProps {
  isInCart: boolean;
  isLoading: boolean;
  isOutOfStock: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
