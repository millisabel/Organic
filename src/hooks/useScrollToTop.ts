import type { RefObject } from 'react';
import { useCallback } from 'react';

interface UseScrollToTopOptions {
  behavior?: ScrollBehavior;
  block?: ScrollLogicalPosition;
  inline?: ScrollLogicalPosition;
}

interface UseScrollToTopReturn {
  scrollToTop: () => void;
}

export function useScrollToTop<T extends HTMLElement>(
  ref: RefObject<T | null>,
  options: UseScrollToTopOptions = {},
): UseScrollToTopReturn {
  const { behavior = 'smooth', block = 'start', inline = 'nearest' } = options;

  const scrollToTop = useCallback(() => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior,
        block,
        inline,
      });
    }
  }, [ref, behavior, block, inline]);

  return { scrollToTop };
}
