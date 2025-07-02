import { useEffect, type RefObject } from 'react';

type Event = MouseEvent | TouchEvent;

/**
 * @description Hook for handling clicks outside of a given element.
 * @param ref - The ref to the element to handle clicks outside of.
 * @param handler - The function to call when a click outside of the element occurs.
 */
export const useOnClickOutside = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T | null>,
  handler: (event: Event) => void,
) => {
  useEffect(() => {
    const listener = (event: Event) => {
      const el = ref?.current;
      if (!el || el.contains(event.target as Node)) {
        return;
      }
      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};
