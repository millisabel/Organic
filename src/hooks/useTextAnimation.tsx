import { navLinkHoverStyles } from '@/components/shared/Navigation/NavLink/variants';
import { useCallback, useRef } from 'react';

export const useTextAnimation = () => {
  const spansRef = useRef<(HTMLSpanElement | null)[]>([]);

  const animateText = useCallback((isActive: boolean) => {
    if (isActive) return;

    spansRef.current.forEach((spanElement, i) => {
      if (!spanElement) return;

      setTimeout(() => {
        spanElement.classList.add(navLinkHoverStyles.textColor, navLinkHoverStyles.transform);
      }, i * 50);

      setTimeout(
        () => {
          spanElement.classList.remove(navLinkHoverStyles.textColor, navLinkHoverStyles.transform);
        },
        300 + i * 50,
      );
    });
  }, []);

  const renderAnimatedText = useCallback((text: string) => {
    return text.split('').map((char, i) => (
      <span
        key={i}
        ref={(el) => {
          spansRef.current[i] = el;
        }}
        className="inline-block transition-all duration-300 ease-in-out"
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  }, []);

  return { animateText, renderAnimatedText };
};
