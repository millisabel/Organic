import SearchButton from '@/components/ui/Button/SearchButton';
import SearchInput from '@/components/ui/Input/SearchInput';
import { useOnClickOutside } from '@/hooks/useOnClickOutside';
import React, { useRef, useState } from 'react';

interface SearchProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  value: string;
  onChange: (value: string) => void;
  handleSearch: () => void;
}

export const Search: React.FC<SearchProps> = ({
  isOpen,
  onOpen,
  onClose,
  value,
  onChange,
  handleSearch,
}) => {
  const searchRef = useRef<HTMLDivElement | null>(null);
  const [isFocused, setIsFocused] = useState(false);

  useOnClickOutside(searchRef, () => {
    if (isOpen) onClose();
  });

  if (!isOpen) {
    return (
      <div>
        <SearchButton onClick={onOpen} />
      </div>
    );
  }

  return (
    <div
      ref={searchRef}
      className={`
        flex items-center
        transition-[width,background-color] duration-300 ease-in-out
        ${
          isOpen
            ? 'relative left-1 z-50 w-full md:w-[400px] bg-[#FAFAFA] rounded-[33px]'
            : 'w-[56px] bg-[#FAFAFA] rounded-full'
        }
        ${isFocused ? 'border border-secondary' : 'border border-transparent'}
      `}
    >
      <SearchInput
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
        autoFocus
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      {value ? <SearchButton onClick={handleSearch} /> : <SearchButton onClick={onClose} />}
    </div>
  );
};
