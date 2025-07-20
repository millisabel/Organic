import type { VariantProps } from 'class-variance-authority';
import type { LabelHTMLAttributes } from 'react';
import type { labelVariants } from './variants';

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  variant?: VariantProps<typeof labelVariants>['variant'];
  text?: string;
}
