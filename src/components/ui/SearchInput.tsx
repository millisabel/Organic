import { Input } from './Input';
import SearchButton from './SearchButton';

const SearchInput = () => {
  return (
    <div className="group relative h-[66px] w-[376px] rounded-[33px] border border-transparent transition-all duration-300 ease-in-out hover:border-secondary hover:shadow-lg focus-within:border-secondary focus-within:shadow-lg">
      <Input
        type="search"
        placeholder="Search..."
        className="h-full w-full rounded-[33px] border-none bg-[#FAFAFA] pr-[70px] text-lg placeholder:italic"
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-[5px]">
        <SearchButton />
      </div>
    </div>
  );
};

export default SearchInput;
