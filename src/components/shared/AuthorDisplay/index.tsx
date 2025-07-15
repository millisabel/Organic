import { cn } from '@/utils/helpers';
import type { AuthorDisplayProps } from './authorDisplay.types';
import UserIcon from '@/components/shared/Icon/UserIcon';

const AuthorDisplay = ({ author, className, iconClassName }: AuthorDisplayProps) => {
  return (
    <p
      className={cn('flex flex-row items-center gap-2 text-text text-small', className)}
      data-component="AuthorDisplay"
    >
      <UserIcon className={iconClassName} size="sm" />
      <span>By {author}</span>
    </p>
  );
};

export default AuthorDisplay;
