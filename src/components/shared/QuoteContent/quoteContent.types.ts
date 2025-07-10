import { type VariantProps } from 'class-variance-authority';
import { quoteVariants } from './quoteContent.variants';

export interface QuoteContentProps {
  text: string;
  size?: VariantProps<typeof quoteVariants>['size'];
  border?: VariantProps<typeof quoteVariants>['border'];
  font?: VariantProps<typeof quoteVariants>['font'];
  color?: VariantProps<typeof quoteVariants>['color'];
  align?: VariantProps<typeof quoteVariants>['align'];
  bg?: VariantProps<typeof quoteVariants>['bg'];
  className?: string;
}
