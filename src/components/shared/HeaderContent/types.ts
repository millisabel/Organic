import type { VariantProps } from 'class-variance-authority';
import type { headerVariants } from './variants';

export interface HeaderContentProps {
  text: string;
  level?: number;
  color?: VariantProps<typeof headerVariants>['color'];
  font?: VariantProps<typeof headerVariants>['font'];
  size?: VariantProps<typeof headerVariants>['size'];
  indents?: VariantProps<typeof headerVariants>['indents'];
  border?: VariantProps<typeof headerVariants>['border'];
  className?: string;
}
