import type { ProductCardData } from '@/features/products/model';
import { useCallback, useEffect, useState } from 'react';

// Generic type for any data that can be paginated
type PaginatableData = ProductCardData | any;

interface UsePaginationWithLoadMoreProps<T extends PaginatableData> {
  items: T[];
  itemsPerPage: number;
  loadMoreItems: number;
}

interface UsePaginationWithLoadMoreReturn<T extends PaginatableData> {
  displayedItems: T[];
  currentPage: number;
  totalDisplayedCount: number;
  hasMoreItems: boolean;
  totalPages: number;
  remainingItems: number;
  handleLoadMore: () => void;
  handlePageChange: (pageNumber: number) => void;
  resetPagination: () => void;
}

export const usePaginationWithLoadMore = <T extends PaginatableData>({
  items,
  itemsPerPage,
  loadMoreItems,
}: UsePaginationWithLoadMoreProps<T>): UsePaginationWithLoadMoreReturn<T> => {
  const [displayedItems, setDisplayedItems] = useState<T[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalDisplayedCount, setTotalDisplayedCount] = useState(0);

  // Reset pagination when items change
  useEffect(() => {
    const reset = () => {
      setDisplayedItems(items.slice(0, itemsPerPage));
      setCurrentPage(1);
      setTotalDisplayedCount(itemsPerPage);
    };
    reset();
  }, [items, itemsPerPage]);

  const resetPagination = useCallback(() => {
    setDisplayedItems(items.slice(0, itemsPerPage));
    setCurrentPage(1);
    setTotalDisplayedCount(itemsPerPage);
  }, [items, itemsPerPage]);

  const handleLoadMore = useCallback(() => {
    const newItems = items.slice(totalDisplayedCount, totalDisplayedCount + loadMoreItems);
    setDisplayedItems((prev) => [...prev, ...newItems]);
    setTotalDisplayedCount(totalDisplayedCount + loadMoreItems);
    setCurrentPage(Math.ceil((totalDisplayedCount + loadMoreItems) / itemsPerPage));
  }, [items, totalDisplayedCount, loadMoreItems, itemsPerPage]);

  const handlePageChange = useCallback(
    (pageNumber: number) => {
      const newItems = items.slice((pageNumber - 1) * itemsPerPage, pageNumber * itemsPerPage);
      setDisplayedItems(newItems);
      setCurrentPage(pageNumber);
      setTotalDisplayedCount(pageNumber * itemsPerPage);
    },
    [items, itemsPerPage],
  );

  // Computed values
  const hasMoreItems = totalDisplayedCount < items.length;
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const remainingItems = items.length - totalDisplayedCount;

  return {
    displayedItems,
    currentPage,
    totalDisplayedCount,
    hasMoreItems,
    totalPages,
    remainingItems,
    handleLoadMore,
    handlePageChange,
    resetPagination,
  };
};
