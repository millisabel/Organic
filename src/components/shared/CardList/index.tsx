import { cn } from '@/utils/helpers';
import type { CardListProps } from './types';
import cardListVariants from './variants';

function CardList<DataType, CardPropsType>({
  variant = 'default',
  items,
  CardComponent,
  getKey,
  getCardProps,
  className,
  itemsDisplay = 'all',
}: CardListProps<DataType, CardPropsType>) {
  const itemsToDisplay = itemsDisplay === 'all' ? items : items.slice(0, itemsDisplay);
  if (itemsToDisplay.length === 0) return null;
  const colItems = itemsToDisplay.length;
  const colClass = `lg:grid-cols-${colItems}`;
  return (
    <div className={cn(cardListVariants({ variant }), colClass, className)}>
      {itemsToDisplay.map((item, idx) => (
        <CardComponent key={getKey(item, idx)} {...getCardProps(item, idx)} />
      ))}
    </div>
  );
}

export default CardList;
