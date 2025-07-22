import type { VariantProps } from 'class-variance-authority';
import type { ReactNode } from 'react';
import type { modalBodyVariants } from './components/ModalBody/variants';
import type { ModalWrapProps } from './components/ModalWrap';

export interface ModalProps extends ModalWrapProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
  bodyVariant?: VariantProps<typeof modalBodyVariants>['variant'];
  showCloseButton?: boolean;
  title?: string;
  description?: string;
}
