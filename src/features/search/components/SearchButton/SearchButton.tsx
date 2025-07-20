import SearchIcon from '@/components/shared/Icon/SearchIcon';
import Button from '@/components/ui/Button';
import type { SearchButtonProps } from '.';

const SearchButton = ({ ...props }: SearchButtonProps) => {
  return (
    <Button
      variant="default"
      size="circle"
      aria-label="Search"
      nameComponent="SearchButton"
      {...props}
    >
      <SearchIcon />
    </Button>
  );
};

export default SearchButton;
