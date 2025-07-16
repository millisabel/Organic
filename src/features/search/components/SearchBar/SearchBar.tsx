import { cn } from '@/utils/helpers';
import SearchButton from '../SearchButton';
import SearchInput from '../SearchInput';
import type { SearchBarProps } from '.';

const SearchBar = ({ className, id, ...props }: SearchBarProps) => {
  return (
    <div className={cn(className, 'relative')}>
      <SearchInput id={id} {...props} />
      <SearchButton className="absolute right-[5px] top-[5px]" />
    </div>
  );
};

export default SearchBar;
