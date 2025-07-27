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
      console.log(`Attempting to scroll to element: ${selector}`);
      setTimeout(() => {
        const element = document.querySelector(selector) as HTMLElement;
        console.log(`Found element:`, element);
        if (element) {
          element.scrollIntoView({
            behavior,
            block,
            inline,
          });
          console.log(`Scrolled to element: ${selector}`);
        } else {
          console.warn(`Element not found: ${selector}`);
        }
      }, delay);
    },
    [behavior, block, inline, delay],
  );

  return { scrollToElement };
};
