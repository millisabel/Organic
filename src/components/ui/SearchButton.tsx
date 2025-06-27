import { cn } from '../../utils/helpers';
import SearchIcon from '../icons/SearchIcon';
import { Button } from './Button';

type SearchButtonProps = React.ComponentPropsWithoutRef<typeof Button>;

const SearchButton = ({ className, ...props }: SearchButtonProps) => {
  return (
    <Button
      variant="search"
      size="round"
      className={cn('hover:translate-y-0', className)}
      aria-label="Search"
      type="button"
      data-component="SearchButton"
      {...props}
    >
      <SearchIcon variant="search" size="md" />
    </Button>
  );
};

export default SearchButton;
