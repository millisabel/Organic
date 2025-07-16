import type { VariantProps } from 'class-variance-authority';
import type { modalBodyVariants } from './variants';

export interface ModalBodyProps {
  children: React.ReactNode;
  className?: string;
  variant?: VariantProps<typeof modalBodyVariants>['variant'];
}
