import React, { useRef, useState } from 'react';
import { useOnClickOutside } from '@/hooks/useOnClickOutside';
import SearchButton from '@/features/search/components/SearchButton';
import SearchInput from '@/components/ui/Input/SearchInput';
import { cn } from '@/utils/helpers';

interface SearchProps {
  value: string;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onChange: (value: string) => void;
  handleSearch: () => void;
}

const styles = {
  container: 'flex items-center transition-[width,background-color] duration-300 ease-in-out',
  openContainer: 'relative left-1 z-50 w-full md:w-[400px] bg-background rounded-[33px]',
  closedContainer: 'w-[56px] bg-background rounded-full',
  focusedContainer: 'border border-secondary',
  unfocusedContainer: 'border border-transparent',
};

export const Search: React.FC<SearchProps> = ({
  value,
  isOpen,
  onOpen,
  onClose,
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
      className={cn(
        styles.container,
        isOpen ? styles.openContainer : styles.closedContainer,
        isFocused ? styles.focusedContainer : styles.unfocusedContainer,
      )}
      data-component="Search"
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
