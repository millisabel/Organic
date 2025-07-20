import { cn } from '@/utils/helpers';
import type { JSX } from 'react';
import type { UiListProps } from './types';
import { uiListVariants } from './variants';

function UiList<T>({
  items,
  renderItem,
  className,
  as = 'div',
  variant = 'default',
  itemsDisplay = 'all',
}: UiListProps<T>) {
  const Tag = as as keyof JSX.IntrinsicElements;

  const itemsToDisplay = itemsDisplay === 'all' ? items : items.slice(0, itemsDisplay);

  if (itemsToDisplay.length === 0) return null;

  return (
    <Tag className={cn(uiListVariants({ variant }), className)}>
      {itemsToDisplay.map((item, idx) => renderItem(item, idx))}
    </Tag>
  );
}

export default UiList;
