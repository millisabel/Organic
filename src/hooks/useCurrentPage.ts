import { useLocation } from 'react-router-dom';

export const useCurrentPage = () => {
  const { pathname } = useLocation();
  const segments = pathname.split('/');
  return segments[1] || 'home';
};
