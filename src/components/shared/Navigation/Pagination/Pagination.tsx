import ArrowIcon from '@/components/shared/Icon/ArrowIcon';
import Button from '@/components/ui/Button/Button';
import React from 'react';
import type { PaginationProps } from './types';

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  className,
  showFirstLast = true,
  maxVisiblePages = 5,
}) => {
  if (totalPages <= 1) return null;

  const getVisiblePages = () => {
    const pages: (number | string)[] = [];
    const halfVisible = Math.floor(maxVisiblePages / 2);

    let startPage = Math.max(1, currentPage - halfVisible);
    let endPage = Math.min(totalPages, currentPage + halfVisible);

    // Adjust if we're near the beginning
    if (currentPage <= halfVisible + 1) {
      endPage = Math.min(totalPages, maxVisiblePages);
    }

    // Adjust if we're near the end
    if (currentPage >= totalPages - halfVisible) {
      startPage = Math.max(1, totalPages - maxVisiblePages + 1);
    }

    // Add first page and ellipsis if needed
    if (startPage > 1) {
      pages.push(1);
      if (startPage > 2) {
        pages.push('...');
      }
    }

    // Add visible pages
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    // Add last page and ellipsis if needed
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push('...');
      }
      pages.push(totalPages);
    }

    return pages;
  };

  const handlePageClick = (page: number | string) => {
    if (typeof page === 'number') {
      onPageChange(page);
    }
  };

  const visiblePages = getVisiblePages();

  return (
    <nav
      className={`flex items-center justify-center gap-2 ${className || ''}`}
      role="navigation"
      aria-label="Pagination Navigation"
    >
      {/* Previous button */}
      <Button
        variant="outline"
        size="compact"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage <= 1}
        aria-label="Go to previous page"
        className="flex items-center gap-1"
      >
        <ArrowIcon direction="left" className="w-4 h-4" />
        <span className="hidden sm:inline">Previous</span>
      </Button>

      {/* First page button */}
      {showFirstLast && currentPage > 2 && (
        <Button
          variant="outline"
          size="compact"
          onClick={() => onPageChange(1)}
          aria-label="Go to first page"
          className="hidden sm:flex"
        >
          1
        </Button>
      )}

      {/* Page numbers */}
      {visiblePages.map((page, index) => (
        <React.Fragment key={index}>
          {page === '...' ? (
            <span className="px-3 py-2 text-gray-500">...</span>
          ) : (
            <Button
              variant={currentPage === page ? 'default' : 'outline'}
              size="compact"
              onClick={() => handlePageClick(page)}
              aria-label={`Go to page ${page}`}
              aria-current={currentPage === page ? 'page' : undefined}
            >
              {page}
            </Button>
          )}
        </React.Fragment>
      ))}

      {/* Last page button */}
      {showFirstLast && currentPage < totalPages - 1 && (
        <Button
          variant="outline"
          size="compact"
          onClick={() => onPageChange(totalPages)}
          aria-label="Go to last page"
          className="hidden sm:flex"
        >
          {totalPages}
        </Button>
      )}

      {/* Next button */}
      <Button
        variant="outline"
        size="compact"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
        aria-label="Go to next page"
        className="flex items-center gap-1"
      >
        <span className="hidden sm:inline">Next</span>
        <ArrowIcon direction="right" className="w-4 h-4" />
      </Button>
    </nav>
  );
};

export default Pagination;
