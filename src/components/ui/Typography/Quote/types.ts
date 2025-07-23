import { type VariantProps } from 'class-variance-authority';
import type { ReactNode } from 'react';
import { quoteVariants } from './variants';

export interface QuoteProps extends React.HTMLAttributes<HTMLQuoteElement> {
  text: ReactNode | string;
  variant?: VariantProps<typeof quoteVariants>['variant'];
  className?: string;
}
