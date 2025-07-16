import Button from '@/components/ui/Button';
import SearchIcon from '@/components/shared/Icon/SearchIcon';
import type { SearchButtonProps } from '.';

const SearchButton = ({ onClick, className }: SearchButtonProps) => {
  return (
    <Button
      variant="default"
      size="circle"
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
