import type { ButtonProps } from '@/components/ui/Button/types';

export interface AddToCartButtonProps extends ButtonProps {
  isInCart: boolean;
  isLoading: boolean;
  isOutOfStock: boolean;
}
