import type { ButtonProps } from '@/components/ui/Button/types';

export interface GoToCartButtonProps extends ButtonProps {
  mode?: 'shopSingle' | 'shopCompact';
  text?: string;
}
