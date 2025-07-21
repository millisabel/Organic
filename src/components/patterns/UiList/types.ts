import type { VariantProps } from 'class-variance-authority';
import type { ReactNode } from 'react';
import type { uiListVariants } from './variants';

export type AdditionalProps = Record<string, string | number | boolean | undefined>;

export interface UiListProps<T> {
  items: T[];
  as?: 'ul' | 'ol' | 'div';
  renderItem: (item: T, idx: number, additionalProps?: AdditionalProps) => ReactNode;
  itemProps?: AdditionalProps;
  variant?: VariantProps<typeof uiListVariants>['variant'];
  className?: string;
  itemsDisplay?: number | 'all';
}
