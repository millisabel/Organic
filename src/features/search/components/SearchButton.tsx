import Button from '@/components/ui/Button/Button';
import SearchIcon from '@/components/ui/Icon/SearchIcon';

type SearchButtonProps = React.ComponentPropsWithoutRef<typeof Button>;

const SearchButton = ({ onClick, className }: SearchButtonProps) => {
  return (
    <Button
      variant="default"
      size="squareLarge"
      rounded="full"
      onClick={onClick}
      aria-label="Search"
      className={className}
      data-component="SearchButton"
    >
      <SearchIcon />
    </Button>
  );
};

export default SearchButton;
