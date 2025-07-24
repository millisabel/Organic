import { Search } from '@/components/ui/Form/Search';
import { useDataFilter } from '@/hooks/useDataFilter';
import { useCallback, useEffect } from 'react';
import type { SearchWithFilterProps } from './types';

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

  const handleFilteredDataChange = useCallback(
    (newFilteredData: T[]) => {
      if (onFilteredDataChange) {
        onFilteredDataChange(newFilteredData);
      }
    },
    [onFilteredDataChange],
  );

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
