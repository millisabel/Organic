import { cn } from '@/utils/helpers';
import type { ListProps } from './types';
import { listItemVariants, listVariants } from './variants';
import ListItem from './ListItem';

const List = ({ items, as = 'ul', variant, className }: ListProps) => {
  const ListTag = as;

  return (
    <ListTag
      className={cn(listVariants({ variant, type: as }), className)}
      data-component="ListContent"
    >
      {items.map((item, idx) => (
        <ListItem key={idx} className={listItemVariants({ variant })}>
          {item}
        </ListItem>
      ))}
    </ListTag>
  );
};

export default List;
