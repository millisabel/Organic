import { Search, type SearchProps } from '@/components/ui/Form/Search';
import { useDataFilter } from '@/hooks/useDataFilter';
import { useCallback, useEffect } from 'react';

export interface SearchWithFilterProps<T> extends Omit<SearchProps, 'value' | 'onChange'> {
  data: T[];
  searchFields: (keyof T)[];
  onFilteredDataChange?: (filteredData: T[]) => void;
}

const SearchWithFilter = <T extends Record<string, unknown>>({
  data,
  searchFields,
  placeholder = 'Search...',
  className,
  'aria-label': ariaLabel,
  id,
  onFilteredDataChange,
  labelVariant = 'hidden',
  inputVariant = 'search',
}: SearchWithFilterProps<T>) => {
  const { searchTerm, filteredData, updateSearchTerm } = useDataFilter({
    data,
    searchFields,
  });

  const handleSearchChange = useCallback(
    (value: string) => {
      updateSearchTerm(value);
    },
    [updateSearchTerm],
  );

  // Notify parent when filtered data changes
  const handleFilteredDataChange = useCallback(
    (newFilteredData: T[]) => {
      if (onFilteredDataChange) {
        onFilteredDataChange(newFilteredData);
      }
    },
    [onFilteredDataChange],
  );

  // Effect to notify parent when filtered data changes
  useEffect(() => {
    handleFilteredDataChange(filteredData);
  }, [filteredData, handleFilteredDataChange]);

  return (
    <Search
      id={id}
      placeholder={placeholder}
      value={searchTerm}
      onChange={handleSearchChange}
      aria-label={ariaLabel}
      className={className}
      labelVariant={labelVariant}
      inputVariant={inputVariant}
    />
  );
};

export default SearchWithFilter;
