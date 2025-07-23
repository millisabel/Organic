import type { VariantProps } from 'class-variance-authority';
import type { ReactNode, Ref } from 'react';
import type { modalVariants } from './variants';

export interface ModalWrapProps {
  children?: ReactNode;
  className?: string;
  variant?: VariantProps<typeof modalVariants>['variant'];
  ref?: Ref<HTMLDivElement>;
}
