import { useCallback, useImperativeHandle, useRef } from 'react';

interface UseSectionWithScrollOptions {
  behavior?: ScrollBehavior;
  block?: ScrollLogicalPosition;
  inline?: ScrollLogicalPosition;
}

interface UseSectionWithScrollReturn {
  sectionRef: React.RefObject<HTMLElement | null>;
  scrollToTop: () => void;
}

export const useSectionWithScroll = (
  forwardedRef: React.ForwardedRef<HTMLElement>,
  options: UseSectionWithScrollOptions = {},
): UseSectionWithScrollReturn => {
  const { behavior = 'smooth', block = 'start', inline = 'nearest' } = options;

  const sectionRef = useRef<HTMLElement>(null);

  // Sync our internal ref with the forwarded ref
  useImperativeHandle(forwardedRef, () => sectionRef.current!, []);

  const scrollToTop = useCallback(() => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({
        behavior,
        block,
        inline,
      });
    }
  }, [behavior, block, inline]);

  return {
    sectionRef,
    scrollToTop,
  };
};
