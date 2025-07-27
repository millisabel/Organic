import { useMemo, useState } from 'react';

interface UsePaginationOptions<T> {
  /**
   * Array of items to paginate
   */
  items: T[];

  /**
   * Number of items per page
   * @default 8
   */
  itemsPerPage?: number;

  /**
   * Initial page number
   * @default 1
   */
  initialPage?: number;
}

interface UsePaginationReturn<T> {
  /**
   * Current page number
   */
  currentPage: number;

  /**
   * Total number of pages
   */
  totalPages: number;

  /**
   * Items for current page
   */
  paginatedItems: T[];

  /**
   * Function to change page
   */
  setCurrentPage: (page: number) => void;

  /**
   * Function to handle page change with optional scroll callback
   */
  handlePageChange: (page: number, onScroll?: () => void) => void;

  /**
   * Function to reset to first page
   */
  resetToFirstPage: () => void;

  /**
   * Whether pagination is needed (more than one page)
   */
  hasPagination: boolean;
}

/**
 * Hook for managing pagination logic
 *
 * @example
 * ```tsx
 * const { currentPage, totalPages, paginatedItems, handlePageChange, resetToFirstPage, hasPagination } = usePagination({
 *   items: sortedProducts,
 *   itemsPerPage: 8
 * });
 *
 * // Reset to first page when filters change
 * useEffect(() => {
 *   resetToFirstPage();
 * }, [selectedCategory, currentSort]);
 * ```
 */
export function usePagination<T>({
  items,
  itemsPerPage = 8,
  initialPage = 1,
}: UsePaginationOptions<T>): UsePaginationReturn<T> {
  const [currentPage, setCurrentPage] = useState(initialPage);

  // Calculate total pages
  const totalPages = Math.ceil(items.length / itemsPerPage);

  // Calculate paginated items
  const paginatedItems = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return items.slice(startIndex, endIndex);
  }, [items, currentPage, itemsPerPage]);

  // Handle page change with optional scroll callback
  const handlePageChange = (page: number, onScroll?: () => void) => {
    setCurrentPage(page);
    onScroll?.();
  };

  // Reset to first page
  const resetToFirstPage = () => {
    setCurrentPage(1);
  };

  // Check if pagination is needed
  const hasPagination = totalPages > 1;

  return {
    currentPage,
    totalPages,
    paginatedItems,
    setCurrentPage,
    handlePageChange,
    resetToFirstPage,
    hasPagination,
  };
}
