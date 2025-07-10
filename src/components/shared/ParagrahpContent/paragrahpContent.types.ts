import type { VariantProps } from 'class-variance-authority';
import { paragraphVariants } from './ParagrahpContent.variants';

export interface ParagraphProps {
  text: string;
  size?: VariantProps<typeof paragraphVariants>['size'];
  font?: VariantProps<typeof paragraphVariants>['font'];
  align?: VariantProps<typeof paragraphVariants>['align'];
  color?: VariantProps<typeof paragraphVariants>['color'];
  className?: string;
}
