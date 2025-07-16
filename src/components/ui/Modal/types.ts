import type { VariantProps } from 'class-variance-authority';
import type { ReactNode } from 'react';
import type { ModalWrapProps } from './components/ModalWrap';
import type { modalBodyVariants } from './components/ModalBody/variants';

export interface ModalProps extends ModalWrapProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
  bodyVariant?: VariantProps<typeof modalBodyVariants>['variant'];
  showCloseButton?: boolean;
}
