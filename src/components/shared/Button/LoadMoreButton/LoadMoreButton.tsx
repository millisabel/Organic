import ArrowIcon from '@/components/shared/Icon/ArrowIcon';
import Button from '@/components/ui/Button/Button';
import React from 'react';
import type { LoadMoreButtonProps } from '.';

const LoadMoreButton: React.FC<LoadMoreButtonProps> = ({
  onLoadMore,
  hasMore,
  isLoading = false,
  className,
  children = 'Load More',
  loadingText = 'Loading...',
  remainingCount,
}) => {
  if (!hasMore) return null;

  return (
    <div className={`flex justify-center ${className || ''}`}>
      <Button
        variant="outline"
        size="default"
        onClick={(e) => {
          e.preventDefault();
          onLoadMore();
        }}
        disabled={isLoading}
        aria-label={isLoading ? 'Loading more items' : 'Load more items'}
        className="flex items-center gap-2"
      >
        {isLoading ? (
          <>
            <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
            {loadingText}
          </>
        ) : (
          <>
            {children}
            {remainingCount && <span className="text-sm opacity-75">({remainingCount} more)</span>}
            <ArrowIcon direction="down" className="w-4 h-4" />
          </>
        )}
      </Button>
    </div>
  );
};

export default LoadMoreButton;
