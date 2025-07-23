import type { VariantProps } from 'class-variance-authority';
import type { ReactNode } from 'react';
import { paragraphVariants } from './variants';

export interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children?: ReactNode;
  text?: ReactNode | string;
  variant?: VariantProps<typeof paragraphVariants>['variant'];
  className?: string;
}
