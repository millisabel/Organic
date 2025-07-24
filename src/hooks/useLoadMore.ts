import { useCallback, useState } from 'react';

interface UseLoadMoreOptions<T> {
  data: T[];
  itemsPerPage: number;
  initialItems?: number;
}

interface UseLoadMoreReturn<T> {
  displayedItems: T[];
  hasMore: boolean;
  isLoading: boolean;
  remainingCount: number;
  loadMore: () => void;
  reset: () => void;
}

export function useLoadMore<T>({
  data,
  itemsPerPage,
  initialItems,
}: UseLoadMoreOptions<T>): UseLoadMoreReturn<T> {
  const [currentIndex, setCurrentIndex] = useState(initialItems || itemsPerPage);
  const [isLoading, setIsLoading] = useState(false);

  const displayedItems = data.slice(0, currentIndex);
  const hasMore = currentIndex < data.length;
  const remainingCount = data.length - currentIndex;

  const loadMore = useCallback(() => {
    if (!hasMore || isLoading) return;

    setIsLoading(true);

    // Simulate loading delay for better UX
    setTimeout(() => {
      setCurrentIndex((prev) => Math.min(prev + itemsPerPage, data.length));
      setIsLoading(false);
    }, 300);
  }, [hasMore, isLoading, itemsPerPage, data.length]);

  const reset = useCallback(() => {
    setCurrentIndex(initialItems || itemsPerPage);
    setIsLoading(false);
  }, [initialItems, itemsPerPage]);

  return {
    displayedItems,
    hasMore,
    isLoading,
    remainingCount,
    loadMore,
    reset,
  };
}
