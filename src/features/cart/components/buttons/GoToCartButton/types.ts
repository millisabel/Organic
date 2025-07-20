import type { ButtonProps } from '@/components/ui/Button/types';

export interface GoToCartButtonProps extends Omit<ButtonProps, 'children'> {
  mode?: 'shopSingle' | 'shopCompact';
}
