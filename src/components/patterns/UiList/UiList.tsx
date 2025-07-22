import { cn } from '@/utils/helpers';
import type { UiListProps } from './types';
import { contentLayoutVariants } from '../ContentLayout/variants';
import type { JSX } from 'react';

function UiList<T>({
  items,
  renderItem,
  className,
  as = 'div',
  variant = 'default',
  itemsDisplay = 'all',
}: UiListProps<T>) {
  const isList = as === 'ul' || as === 'ol';
  const Tag = as as keyof JSX.IntrinsicElements;

  const itemsToDisplay = itemsDisplay === 'all' ? items : items.slice(0, itemsDisplay);

  if (itemsToDisplay.length === 0) return null;

  if (isList) {
    return (
      <Tag className={cn(contentLayoutVariants({ variant }), className)}>
        {itemsToDisplay.map((item, idx) => {
          const renderedItem = renderItem(item, idx);
          return (
            <li key={idx} className="list-none">
              {renderedItem}
            </li>
          );
        })}
      </Tag>
    );
  }

  return (
    <Tag className={cn(contentLayoutVariants({ variant }), className)}>
      {itemsToDisplay.map((item, idx) => {
        const renderedItem = renderItem(item, idx);
        return renderedItem;
      })}
    </Tag>
  );
}

export default UiList;
