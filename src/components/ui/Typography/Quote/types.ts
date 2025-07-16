import { type VariantProps } from 'class-variance-authority';
import { quoteVariants } from './variants';

export interface QuoteProps {
  text: string;
  variant?: VariantProps<typeof quoteVariants>['variant'];
  className?: string;
}
