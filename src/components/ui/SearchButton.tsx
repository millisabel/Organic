import SearchIcon from '../icons/SearchIcon';
import { Button } from './Button';

type SearchButtonProps = React.ComponentPropsWithoutRef<typeof Button>;

const SearchButton = (props: SearchButtonProps) => {
  return (
    <Button variant="secondary" size="icon-xl" {...props} className="group">
      <SearchIcon className="h-5 w-5 transition-transform duration-300 group-hover:scale-125" />
    </Button>
  );
};

export default SearchButton;
