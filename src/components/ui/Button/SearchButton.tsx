import { Button } from '@/components/ui/Button';
import SearchIcon from '@/components/ui/Icon/SearchIcon';

type SearchButtonProps = React.ComponentPropsWithoutRef<typeof Button>;

const SearchButton = ({ className, ...props }: SearchButtonProps) => {
  return (
    <Button
      variant="search"
      size="round"
      className={className}
      aria-label="Search"
      type="button"
      data-component="SearchButton"
      {...props}
    >
      <SearchIcon size="md" />
    </Button>
  );
};

export default SearchButton;
