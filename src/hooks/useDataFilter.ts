import { useCallback, useEffect, useMemo, useState } from 'react';

export interface FilterConfig<T> {
  searchTerm: string;
  searchFields: (keyof T)[];
}

export interface UseDataFilterOptions<T> {
  data: T[];
  searchFields: (keyof T)[];
  debounceMs?: number;
}

export const useDataFilter = <T extends Record<string, unknown>>({
  data,
  searchFields,
  debounceMs = 300,
}: UseDataFilterOptions<T>) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, debounceMs);

    return () => clearTimeout(timeoutId);
  }, [searchTerm, debounceMs]);

  const searchInItem = useCallback(
    (item: T, term: string): boolean => {
      if (!term.trim()) return true;

      const lowerTerm = term.toLowerCase();

      return searchFields.some((field) => {
        const value = item[field];
        if (value == null) return false;

        if (typeof value === 'string') {
          return value.toLowerCase().includes(lowerTerm);
        }
        if (typeof value === 'number') {
          return value.toString().includes(lowerTerm);
        }
        if (Array.isArray(value)) {
          return value.some(
            (v: unknown) => typeof v === 'string' && v.toLowerCase().includes(lowerTerm),
          );
        }

        return false;
      });
    },
    [searchFields],
  );

  const filteredData = useMemo(() => {
    if (!debouncedSearchTerm.trim()) {
      return data;
    }

    return data.filter((item) => searchInItem(item, debouncedSearchTerm));
  }, [data, debouncedSearchTerm, searchInItem]);

  const updateSearchTerm = useCallback((newTerm: string) => {
    setSearchTerm(newTerm);
  }, []);

  const clearSearch = useCallback(() => {
    setSearchTerm('');
    setDebouncedSearchTerm('');
  }, []);

  return {
    searchTerm,
    filteredData,
    updateSearchTerm,
    clearSearch,
    isSearching: debouncedSearchTerm.trim().length > 0,
    resultsCount: filteredData.length,
    totalCount: data.length,
  };
};
