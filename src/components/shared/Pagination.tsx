import { Button } from '@/components/ui/Button';
import { cn } from '@/utils/helpers';
import React from 'react';

interface IPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<IPaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className="flex justify-center items-center gap-2">
      {pageNumbers.map((number) => (
        <Button
          key={number}
          onClick={() => onPageChange(number)}
          className={cn(
            '!min-w-0 !h-12 !w-12 !rounded-full !text-lg',
            currentPage === number
              ? '!bg-primary !text-white'
              : '!bg-gray-200 !text-primary hover:!bg-accent',
          )}
        >
          {number}
        </Button>
      ))}
    </nav>
  );
};

export default Pagination;
