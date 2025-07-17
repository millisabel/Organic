import { cn } from '@/utils/helpers';
import type { AuthorDisplayProps } from './types';

const AuthorDisplay = ({ author, className, icon }: AuthorDisplayProps) => {
  return (
    <p
      className={cn('flex flex-row items-center gap-2 text-text text-small', className)}
      data-component="AuthorDisplay"
    >
      {icon}
      <span>By {author}</span>
    </p>
  );
};

export default AuthorDisplay;
