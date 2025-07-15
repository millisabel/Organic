import type { VariantProps } from 'class-variance-authority';
import type { labelVariants } from './variants';
import type { LabelHTMLAttributes } from 'react';

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  variant?: VariantProps<typeof labelVariants>['variant'];
  children?: React.ReactNode;
  className?: string;
  text?: string;
  htmlFor: string;
}
