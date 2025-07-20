export interface VisiblePage {
  type: 'page' | 'ellipsis';
  value: number;
  label: string;
}

/**
 * Calculates visible pages for pagination
 * @param currentPage - current page
 * @param totalPages - total number of pages
 * @param maxVisiblePages - maximum number of visible buttons
 * @returns Array of visible pages with ellipsis
 */
export const getVisiblePages = (
  currentPage: number,
  totalPages: number,
  maxVisiblePages: number = 7,
): VisiblePage[] => {
  if (totalPages <= maxVisiblePages) {
    // If there are few pages, show all
    return Array.from({ length: totalPages }, (_, i) => ({
      type: 'page' as const,
      value: i + 1,
      label: String(i + 1),
    }));
  }

  const pages: VisiblePage[] = [];
  const halfVisible = Math.floor(maxVisiblePages / 2);

  // Always show the first page
  pages.push({ type: 'page', value: 1, label: '1' });

  // Calculate the range around the current page
  let startPage = Math.max(2, currentPage - halfVisible);
  let endPage = Math.min(totalPages - 1, currentPage + halfVisible);

  // Correct the range if it goes beyond the boundaries
  if (startPage > 2) {
    pages.push({ type: 'ellipsis', value: 0, label: '...' });
  }

  // Add pages in the range
  for (let i = startPage; i <= endPage; i++) {
    pages.push({ type: 'page', value: i, label: String(i) });
  }

  // Add ellipsis before the last page, if needed
  if (endPage < totalPages - 1) {
    pages.push({ type: 'ellipsis', value: 0, label: '...' });
  }

  // Always show the last page, if it's not the first
  if (totalPages > 1) {
    pages.push({ type: 'page', value: totalPages, label: String(totalPages) });
  }

  return pages;
};
