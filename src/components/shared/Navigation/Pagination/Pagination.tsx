import ArrowIcon from '@/components/shared/Icon/ArrowIcon';
import Button from '@/components/ui/Button/Button';
import { useIsBelowBreakpoint, usePaginationDisplay } from '@/hooks';
import React from 'react';
import type { PaginationProps } from './types';

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  className,
  showFirstLast = true,
  maxVisiblePages = 3,
}) => {
  const isBelowSm = useIsBelowBreakpoint('sm');
  const isBelowLg = useIsBelowBreakpoint('lg');
  const buttonSize = isBelowSm ? 'social' : 'circle';
  const adjustedMaxVisiblePages = isBelowLg ? 1 : maxVisiblePages;
  const {
    visiblePages,
    shouldShowStartEllipsis,
    shouldShowEndEllipsis,
    shouldShowFirstPage,
    shouldShowLastPage,
  } = usePaginationDisplay({
    currentPage,
    totalPages,
    maxVisiblePages: adjustedMaxVisiblePages,
  });

  if (totalPages <= 1) return null;

  const handlePageClick = (page: number | string) => {
    if (typeof page === 'number') {
      onPageChange(page);
    }
  };

  return (
    <nav
      className={`flex items-center justify-center gap-2 ${className || ''}`}
      role="navigation"
      aria-label="Pagination Navigation"
    >
      {/* First page button */}
      <Button
        variant="outline"
        size={buttonSize}
        onClick={() => onPageChange(1)}
        aria-label="Go to first page"
        className={
          showFirstLast && shouldShowFirstPage ? 'opacity-100' : 'opacity-20 cursor-not-allowed'
        }
      >
        1
      </Button>

      {/* Previous button */}
      <Button
        variant="outline"
        size={buttonSize}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage <= 1}
        aria-label="Go to previous page"
        className="flex items-center gap-1"
      >
        <ArrowIcon direction="left" className="w-4 h-4" />
        <span className="hidden">Previous</span>
      </Button>

      {/* Page numbers */}
      {visiblePages.map((page, index) => (
        <React.Fragment key={index}>
          {page === '...' ? (
            <span
              className={`px-1 py-2 text-gray-500 transition-opacity duration-200 ${
                (index === 0 && shouldShowStartEllipsis) ||
                (index === visiblePages.length - 1 && shouldShowEndEllipsis)
                  ? 'opacity-100'
                  : 'opacity-0'
              }`}
            >
              ...
            </span>
          ) : (
            <Button
              variant={currentPage === page ? 'default' : 'outline'}
              size={buttonSize}
              onClick={() => handlePageClick(page)}
              aria-label={`Go to page ${page}`}
              aria-current={currentPage === page ? 'page' : undefined}
            >
              {page}
            </Button>
          )}
        </React.Fragment>
      ))}

      {/* Next button */}
      <Button
        variant="outline"
        size={buttonSize}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
        aria-label="Go to next page"
        className="flex items-center gap-1"
      >
        <span className="hidden">Next</span>
        <ArrowIcon direction="right" className="w-4 h-4" />
      </Button>

      {/* Last page button */}
      <Button
        variant="outline"
        size={buttonSize}
        onClick={() => onPageChange(totalPages)}
        aria-label="Go to last page"
        className={
          showFirstLast && shouldShowLastPage ? 'opacity-100' : 'opacity-20 cursor-not-allowed'
        }
      >
        {totalPages}
      </Button>
    </nav>
  );
};

export default Pagination;
