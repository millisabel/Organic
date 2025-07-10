import { cn } from '@/utils/helpers';
import type { ListContentProps } from './listContent.types';
import { listItemsVariants, listVariants } from './listContent.variants';

const ListContent = ({
  items,
  ordered = false,
  font,
  color,
  indents,
  indentItems,
  className,
}: ListContentProps) => {
  const ListTag = ordered ? 'ol' : 'ul';
  const classes = listVariants({ ordered, font, color, indents });
  const listItemsClasses = listItemsVariants({ indentItems });

  return (
    <ListTag className={cn(classes, className)} data-component="ListContent">
      {items.map((li: string, idx: number) => (
        <li key={`li-${idx}`} className={listItemsClasses}>
          {li}
        </li>
      ))}
    </ListTag>
  );
};

export default ListContent;
