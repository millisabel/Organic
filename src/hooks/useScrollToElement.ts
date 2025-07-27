import { useCallback } from 'react';

interface UseScrollToElementOptions {
  behavior?: ScrollBehavior;
  block?: ScrollLogicalPosition;
  inline?: ScrollLogicalPosition;
  delay?: number;
}

export const useScrollToElement = (options: UseScrollToElementOptions = {}) => {
  const { behavior = 'smooth', block = 'start', inline = 'nearest', delay = 0 } = options;

  const scrollToElement = useCallback(
    (selector: string) => {
      setTimeout(() => {
        const element = document.querySelector(selector) as HTMLElement;
        if (element) {
          element.scrollIntoView({
            behavior,
            block,
            inline,
          });
        }
      }, delay);
    },
    [behavior, block, inline, delay],
  );

  return { scrollToElement };
};
