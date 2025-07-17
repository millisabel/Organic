import type { VariantProps } from 'class-variance-authority';
import type { listVariants } from './variants';

export type ListProps = {
  items: React.ReactNode[];
  as?: 'ul' | 'ol';
  variant?: VariantProps<typeof listVariants>['variant'];
  className?: string;
};
