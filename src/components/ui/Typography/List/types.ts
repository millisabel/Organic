import type { VariantProps } from 'class-variance-authority';
import type { ReactNode } from 'react';
import type { listVariants } from './variants';

export interface ListProps extends React.HTMLAttributes<HTMLUListElement> {
  items: React.ReactNode[];
  as?: 'ul' | 'ol';
  variant?: VariantProps<typeof listVariants>['variant'];
  className?: string;
  icon?: ReactNode; // Icon component to use instead of default list markers
}
