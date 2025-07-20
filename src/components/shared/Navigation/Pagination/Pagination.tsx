import Button from '@/components/ui/Button/Button';
import React from 'react';
import type { PaginationProps } from './types';
import { getVisiblePages } from './utils';

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  maxVisiblePages = 5,
  showFirstLast = true,
  showPrevNext = true,
  showEllipsis = true,
}) => {
  const visiblePages = getVisiblePages(currentPage, totalPages, maxVisiblePages);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const renderPageButton = (page: number, label: string, isActive: boolean) => (
    <Button
      key={`page-${page}`}
      onClick={() => handlePageChange(page)}
      size="circle"
      variant={isActive ? 'default' : 'light'}
      state={isActive ? 'notActive' : 'default'}
    >
      {label}
    </Button>
  );

  const renderEllipsis = (key: string) => (
    <span key={key} className="px-2 text-gray-500">
      ...
    </span>
  );

  return (
    <nav
      className="flex flex-row justify-center items-center gap-2 w-max m-auto"
      data-component="Pagination"
    >
      {/* Button "First" */}
      {showFirstLast && totalPages > 1 && (
        <Button
          onClick={() => handlePageChange(1)}
          size="circle"
          variant="light"
          disabled={currentPage === 1}
          aria-label="Go to first page"
        >
          «
        </Button>
      )}

      {/* Button "Next" */}
      {showPrevNext && (
        <Button
          onClick={() => handlePageChange(currentPage - 1)}
          size="circle"
          variant="light"
          disabled={currentPage === 1}
          aria-label="Go to previous page"
        >
          ‹
        </Button>
      )}

      {/* Pages */}
      {visiblePages.map((page, index) => {
        if (page.type === 'ellipsis' && showEllipsis) {
          return renderEllipsis(`ellipsis-${index}`);
        }

        if (page.type === 'page') {
          return renderPageButton(page.value, page.label, currentPage === page.value);
        }

        return null;
      })}

      {/* Button "Next" */}
      {showPrevNext && (
        <Button
          onClick={() => handlePageChange(currentPage + 1)}
          size="circle"
          variant="light"
          disabled={currentPage === totalPages}
          aria-label="Go to next page"
        >
          ›
        </Button>
      )}

      {/* Button "Last" */}
      {showFirstLast && totalPages > 1 && (
        <Button
          onClick={() => handlePageChange(totalPages)}
          size="circle"
          variant="light"
          disabled={currentPage === totalPages}
          aria-label="Go to last page"
        >
          »
        </Button>
      )}
    </nav>
  );
};

export default Pagination;
