import { cn } from '@/utils/helpers';
import type { ReactNode } from 'react';

export type ListItemProps = {
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
};

const ListItem = ({ children, className, icon }: ListItemProps) => {
  if (icon) {
    return (
      <li className={cn('flex items-center gap-2', className)}>
        <span className="flex-shrink-0" aria-hidden="true">
          {icon}
        </span>
        <span>{children}</span>
      </li>
    );
  }

  return <li className={cn('', className)}>{children}</li>;
};

export default ListItem;
