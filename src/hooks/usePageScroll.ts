import { useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useScrollToTop } from './useScrollToTop';

interface UsePageScrollOptions {
  /**
   * URL parameter name to watch for changes
   * @example 'category', 'section', 'tab'
   */
  paramName: string;

  /**
   * Scroll behavior options
   */
  scrollOptions?: {
    behavior?: ScrollBehavior;
    block?: ScrollLogicalPosition;
    inline?: ScrollLogicalPosition;
  };

  /**
   * Delay before scrolling (ms) - useful for ensuring component is rendered
   * @default 100
   */
  delay?: number;

  /**
   * Whether to scroll on initial load if parameter exists
   * @default true
   */
  scrollOnInitial?: boolean;
}

interface UsePageScrollReturn {
  /**
   * Ref to attach to the target section
   */
  sectionRef: React.RefObject<HTMLElement | null>;

  /**
   * Manual scroll function
   */
  scrollToSection: () => void;

  /**
   * Current parameter value from URL
   */
  paramValue: string | null;
}

/**
 * Universal hook for automatic scrolling to sections based on URL parameters
 *
 * @example
 * ```tsx
 * // Basic usage - scroll to section when category parameter changes
 * const { sectionRef, paramValue } = usePageScroll({
 *   paramName: 'category',
 *   scrollOptions: { behavior: 'smooth', block: 'start' }
 * });
 *
 * return (
 *   <ShopSection ref={sectionRef} initialCategory={paramValue || 'All Categories'} />
 * );
 * ```
 */
export function usePageScroll({
  paramName,
  scrollOptions = { behavior: 'smooth', block: 'start' },
  delay = 100,
  scrollOnInitial = true,
}: UsePageScrollOptions): UsePageScrollReturn {
  const [searchParams] = useSearchParams();
  const sectionRef = useRef<HTMLElement>(null);
  const paramValue = searchParams.get(paramName);

  const { scrollToTop } = useScrollToTop(sectionRef, scrollOptions);

  useEffect(() => {
    if (paramValue && (scrollOnInitial || !sectionRef.current)) {
      const timer = setTimeout(() => {
        scrollToTop();
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [paramValue, scrollToTop, delay, scrollOnInitial]);

  return {
    sectionRef,
    scrollToSection: scrollToTop,
    paramValue,
  };
}
