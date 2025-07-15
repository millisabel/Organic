import type { ReactNode } from 'react';

export interface UiListProps<T> {
  items: T[];
  as?: 'ul' | 'ol' | 'div';
  renderItem: (item: T, idx: number) => ReactNode;
  variant?: 'default' | 'news' | 'product' | 'category' | 'social';
  className?: string;
}
