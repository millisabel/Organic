import type { VariantProps } from 'class-variance-authority';
import { paragraphVariants } from './variants';

export interface ParagraphProps {
  text: string;
  variant?: VariantProps<typeof paragraphVariants>['variant'];
  className?: string;
}
