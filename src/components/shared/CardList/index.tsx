import { cn } from '@/utils/helpers';
import type { CardListProps } from './types';
import cardListVariants from './variants';

function CardList<DataType>({
  variant = 'default',
  items,
  CardComponent,
  className,
  itemsDisplay = 'all',
}: CardListProps<DataType>) {
  const itemsToDisplay = itemsDisplay === 'all' ? items : items.slice(0, itemsDisplay);
  if (itemsToDisplay.length === 0) return null;
  const colItems = itemsToDisplay.length;
  const colClass = `lg:grid-cols-${colItems}`;
  return (
    <div className={cn(cardListVariants({ variant }), colClass, className)}>
      {itemsToDisplay.map((item, idx) => (
        <CardComponent key={idx} data={item} />
      ))}
    </div>
  );
}

export default CardList;
