import type { ReactNode } from 'react';

export type ListItemProps = {
  children: ReactNode;
  className?: string;
};

const ListItem = ({ children, className }: ListItemProps) => {
  return <li className={className}>{children}</li>;
};

export default ListItem;
