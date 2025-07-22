import type { VariantProps } from 'class-variance-authority';
import type { contentLayoutVariants } from './variants';

export interface ContentLayoutProps {
  variant: VariantProps<typeof contentLayoutVariants>['variant'];
  children: React.ReactNode;
  className?: string;
}
