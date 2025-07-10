import type { VariantProps } from 'class-variance-authority';
import type { headerVariants } from './headerContent.variants';

export interface HeaderContentProps {
  text: string;
  level?: number;
  color?: VariantProps<typeof headerVariants>['color'];
  font?: VariantProps<typeof headerVariants>['font'];
  size?: VariantProps<typeof headerVariants>['size'];
  indents?: VariantProps<typeof headerVariants>['indents'];
  className?: string;
}
