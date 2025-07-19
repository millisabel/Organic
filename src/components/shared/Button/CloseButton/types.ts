import type { ButtonProps } from '@/components/ui/Button/types';

export interface CloseButtonProps extends ButtonProps {
  onClick: () => void;
  ariaLabel?: string;
}
