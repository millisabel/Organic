import { cn } from '@/utils/helpers';
import type { ReactNode } from 'react';

export type ListItemProps = {
  children: ReactNode;
  className?: string;
  icon?: ReactNode; // Icon component to display before the item
};

const ListItem = ({ children, className, icon }: ListItemProps) => {
  return (
    <li className={cn('flex items-center gap-2', className)}>
      {icon && (
        <span className="flex-shrink-0" aria-hidden="true">
          {icon}
        </span>
      )}
      <span>{children}</span>
    </li>
  );
};

export default ListItem;
