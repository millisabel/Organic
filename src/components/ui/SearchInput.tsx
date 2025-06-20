import { Input } from './Input';
import SearchButton from './SearchButton';

const SearchInput = () => {
  return (
    <div className="relative h-[66px] w-[376px]">
      <Input
        type="search"
        placeholder="Search..."
        className="h-full w-full rounded-[36px] border-none bg-[#FAFAFA] pr-[70px] text-lg placeholder:italic"
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-[5px]">
        <SearchButton />
      </div>
    </div>
  );
};

export default SearchInput;
