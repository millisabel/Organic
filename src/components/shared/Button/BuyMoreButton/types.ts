import type { ButtonProps } from '@/components/ui/Button/types';

export interface BuyMoreButtonProps extends ButtonProps {
  productId: string | number;
}
