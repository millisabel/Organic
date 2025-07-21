import { cn } from '@/utils/helpers';
import ListItem from './ListItem';
import type { ListProps } from './types';
import { listItemVariants, listVariants } from './variants';

const List = ({ items, as = 'ul', variant, className, icon, ...props }: ListProps) => {
  const ListTag = as;

  return (
    <ListTag
      className={cn(listVariants({ variant, type: as, hasIcon: !!icon }), className)}
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
