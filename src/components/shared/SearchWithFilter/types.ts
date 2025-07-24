import type { SearchProps } from '@/components/ui/Form/Search';

export interface SearchWithFilterProps<T> extends Omit<SearchProps, 'value' | 'onChange'> {
  data: T[];
  searchFields: (keyof T)[];
  onFilteredDataChange?: (filteredData: T[]) => void;
}
