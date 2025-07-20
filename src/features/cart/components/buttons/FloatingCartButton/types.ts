import type { ButtonProps } from '@/components/ui/Button/types';

export interface FloatingCartButtonProps extends Omit<ButtonProps, 'children'> {
  count: number;
  price: number;
  isVisible: boolean;
}
