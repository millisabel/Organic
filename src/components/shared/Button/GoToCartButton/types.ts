import type { ButtonProps } from '@/components/ui/Button/types';

export interface GoToCartButtonProps extends ButtonProps {
  mode?: 'default' | 'compact';
  text?: string;
}
