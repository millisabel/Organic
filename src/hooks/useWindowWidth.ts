import { debounce } from '@/utils/helpers';
import { useEffect, useState } from 'react';

/**
 * @description Hook for getting the current window width.
 * @returns The current window width.
 */
export const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    const debouncedHandleResize = debounce(handleResize, 200);

    window.addEventListener('resize', debouncedHandleResize);

    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
    };
  }, []);

  return width;
};
