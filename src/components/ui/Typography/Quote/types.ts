import { type VariantProps } from 'class-variance-authority';
import type { ReactNode } from 'react';
import { quoteVariants } from './variants';

export interface QuoteProps {
  children: ReactNode;
  variant?: VariantProps<typeof quoteVariants>['variant'];
  className?: string;
}
