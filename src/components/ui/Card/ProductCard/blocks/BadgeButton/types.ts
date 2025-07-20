import type { ButtonProps } from '@/components/ui/Button/types';

export interface BadgeButtonProps extends ButtonProps {
  text: string;
  handleCategoryClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
