import Button from '@/components/ui/Button/Button';
import React from 'react';
import type { PaginationProps } from './types';

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav
      className="flex flex-row justify-center items-center gap-2 w-max m-auto"
      data-component="Pagination"
    >
      {pageNumbers.map((number) => (
        <Button
          key={number}
          onClick={() => onPageChange(number)}
          size="circle"
          variant={currentPage === number ? 'default' : 'light'}
          state={currentPage === number ? 'notActive' : 'default'}
        >
          {number}
        </Button>
      ))}
    </nav>
  );
};

export default Pagination;
