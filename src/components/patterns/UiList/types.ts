import type { VariantProps } from 'class-variance-authority';
import type { ReactNode } from 'react';
import type { uiListVariants } from './variants';

export interface UiListProps<T> {
  items: T[];
  as?: 'ul' | 'ol' | 'div';
  renderItem: (item: T, idx: number) => ReactNode;
  variant?: VariantProps<typeof uiListVariants>['variant'];
  className?: string;
  itemsDisplay?: number | 'all';
}
