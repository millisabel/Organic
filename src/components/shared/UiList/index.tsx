import type { JSX } from 'react';
import type { UiListProps } from './types';

export function UiList<T>({ items, renderItem, className, as = 'div' }: UiListProps<T>) {
  const Tag = as as keyof JSX.IntrinsicElements;
  return <Tag className={className}>{items.map((item, idx) => renderItem(item, idx))}</Tag>;
}
