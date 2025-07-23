import { useEffect, useState } from 'react';

/**
 * Options for configuring element visibility detection
 */
interface UseElementVisibilityOptions {
  /** CSS selector for the target element */
  selector: string;
  /** Threshold for intersection (0-1), default 0.1 */
  threshold?: number;
  /** Root margin for intersection observer, default '0px' */
  rootMargin?: string;
}

/**
 * Hook for tracking element visibility using Intersection Observer
 * @param options Configuration options for visibility detection
 * @returns Boolean indicating if the element is visible
 *
 * @example
 * // Track header visibility
 * const headerVisible = useElementVisibility({ selector: 'header' });
 *
 * @example
 * // Track with custom threshold
 * const isVisible = useElementVisibility({
 *   selector: '.my-element',
 *   threshold: 0.5
 * });
 */
export const useElementVisibility = (options: UseElementVisibilityOptions): boolean => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Find the target element
    const element = document.querySelector(options.selector);
    if (!element) {
      // eslint-disable-next-line
      console.warn(`Element with selector "${options.selector}" not found`);
      return;
    }

    // Create intersection observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: options.threshold ?? 0.1,
        rootMargin: options.rootMargin ?? '0px',
      },
    );

    // Start observing
    observer.observe(element);

    // Cleanup function
    return () => {
      observer.disconnect();
    };
  }, [options.selector, options.threshold, options.rootMargin]);

  return isVisible;
};
