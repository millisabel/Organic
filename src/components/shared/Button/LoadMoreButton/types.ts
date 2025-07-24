export interface LoadMoreButtonProps {
  onLoadMore: () => void;
  hasMore: boolean;
  isLoading?: boolean;
  className?: string;
  children?: React.ReactNode;
  loadingText?: string;
  remainingCount?: number;
}
