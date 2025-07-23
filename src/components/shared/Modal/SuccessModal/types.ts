import type { ModalProps } from '@/components/ui/Modal/types';

export interface SuccessModalProps extends ModalProps {
  details?: string;
  footerText?: string;
}
