import { useMemo } from 'react';

interface UsePaginationDisplayOptions {
  /**
   * Current page number
   */
  currentPage: number;

  /**
   * Total number of pages
   */
  totalPages: number;

  /**
   * Maximum number of visible page buttons
   * @default 3
   */
  maxVisiblePages?: number;
}

interface UsePaginationDisplayReturn {
  /**
   * Array of visible pages with ellipsis
   */
  visiblePages: (number | string)[];

  /**
   * Whether to show start ellipsis
   */
  shouldShowStartEllipsis: boolean;

  /**
   * Whether to show end ellipsis
   */
  shouldShowEndEllipsis: boolean;

  /**
   * Whether to show first page button
   */
  shouldShowFirstPage: boolean;

  /**
   * Whether to show last page button
   */
  shouldShowLastPage: boolean;
}

/**
 * Hook for pagination display logic only (without data pagination)
 */
export function usePaginationDisplay({
  currentPage,
  totalPages,
  maxVisiblePages = 3,
}: UsePaginationDisplayOptions): UsePaginationDisplayReturn {
  // Calculate visible pages
  const visiblePages = useMemo(() => {
    if (totalPages <= 1) return [];

    const pages: (number | string)[] = [];

    // Calculate how many pages to show on each side of current page
    const sidePages = Math.floor((maxVisiblePages - 1) / 2);

    let startPage = Math.max(1, currentPage - sidePages);
    let endPage = Math.min(totalPages, currentPage + sidePages);

    // Adjust if we're out of bounds
    if (endPage - startPage + 1 < maxVisiblePages) {
      if (startPage === 1) {
        // If at the beginning, show more pages on the right
        endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
      } else {
        // If at the end, show more pages on the left
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
      }
    }

    // Always add ellipsis at the beginning (transparent if not needed)
    pages.push('...');

    // Add only visible pages (without first and last)
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    // Always add ellipsis at the end (transparent if not needed)
    pages.push('...');

    return pages;
  }, [currentPage, totalPages, maxVisiblePages]);

  // Calculate ellipsis visibility
  const shouldShowStartEllipsis = useMemo(() => {
    // Show start ellipsis if there are pages between 1 and the first visible page
    const firstVisiblePage = visiblePages.find((page) => typeof page === 'number') as number;
    return firstVisiblePage > 2;
  }, [visiblePages]);

  const shouldShowEndEllipsis = useMemo(() => {
    // Show end ellipsis if there are pages between the last visible page and totalPages
    const lastVisiblePage = visiblePages.filter((page) => typeof page === 'number').pop() as number;
    return lastVisiblePage < totalPages - 1;
  }, [visiblePages, totalPages]);

  // Calculate first/last page button visibility
  const shouldShowFirstPage = useMemo(() => {
    return maxVisiblePages === 1 ? currentPage > 1 : currentPage > 2;
  }, [currentPage, maxVisiblePages]);

  const shouldShowLastPage = useMemo(() => {
    return maxVisiblePages === 1 ? currentPage < totalPages : currentPage < totalPages - 1;
  }, [currentPage, totalPages, maxVisiblePages]);

  return {
    visiblePages,
    shouldShowStartEllipsis,
    shouldShowEndEllipsis,
    shouldShowFirstPage,
    shouldShowLastPage,
  };
}
