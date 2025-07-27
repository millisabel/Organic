import type { ButtonProps } from '@/components/ui/Button/types';

export interface GoToShopProps extends ButtonProps {
  isArrow?: boolean;
  onShopClick?: () => void; // Функция для прокрутки к секции
}
