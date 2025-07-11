import { cn } from '@/utils/helpers';
import React from 'react';

interface CardListProps<DataType, CardPropsType> {
  items: DataType[];
  CardComponent: React.ComponentType<CardPropsType>;
  getKey: (item: DataType, idx: number) => React.Key;
  getCardProps: (item: DataType, idx: number) => CardPropsType;
  itemsDisplay?: number | 'all';
  className?: string;
}

function CardList<DataType, CardPropsType>({
  items,
  CardComponent,
  getKey,
  getCardProps,
  className,
  itemsDisplay = 'all',
}: CardListProps<DataType, CardPropsType>) {
  const itemsToDisplay = itemsDisplay === 'all' ? items : items.slice(0, itemsDisplay);

  return (
    <div
      className={cn(
        'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4',
        className,
      )}
    >
      {itemsToDisplay.map((item, idx) => (
        <CardComponent key={getKey(item, idx)} {...getCardProps(item, idx)} />
      ))}
    </div>
  );
}

export default CardList;
