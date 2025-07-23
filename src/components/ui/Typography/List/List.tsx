import { cn } from '@/utils/helpers';
import ListItem from './ListItem';
import type { ListProps } from './types';
import { listItemVariants, listVariants } from './variants';

const List = ({ items, as = 'ul', variant, className, icon, ordered, ...props }: ListProps) => {
  const listType = ordered !== undefined ? (ordered ? 'ol' : 'ul') : as;
  const ListTag = listType;

  return (
    <ListTag
      className={cn(listVariants({ variant, type: listType }), icon && 'list-none', className)}
      data-component="ListContent"
      {...props}
    >
      {items.map((item, idx) => (
        <ListItem key={idx} className={listItemVariants({ variant })} icon={icon}>
          {item}
        </ListItem>
      ))}
    </ListTag>
  );
};

export default List;
