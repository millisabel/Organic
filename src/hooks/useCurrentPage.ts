import { useLocation } from 'react-router-dom';

/**
 * @description Hook for getting the current page.
 * @returns The current page.
 */
export const useCurrentPage = () => {
  const { pathname } = useLocation();
  const segments = pathname.split('/');
  return segments[1] || 'home';
};
