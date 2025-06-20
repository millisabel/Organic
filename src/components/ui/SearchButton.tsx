import { cn } from '../../utils/helpers';
import SearchIcon from '../icons/SearchIcon';
import { Button } from './Button';

type SearchButtonProps = React.ComponentPropsWithoutRef<typeof Button>;

const SearchButton = ({ className, ...props }: SearchButtonProps) => {
  return (
    <Button
      variant="secondary"
      size="icon-lg"
      className={cn('hover:translate-y-0', className)}
      {...props}
    >
      <SearchIcon className="h-5 w-5 transition-transform duration-300 ease-in-out group-hover:scale-125" />
    </Button>
  );
};

export default SearchButton;
