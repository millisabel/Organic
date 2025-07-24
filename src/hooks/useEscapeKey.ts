import { useEffect } from 'react';

/**
 * Hook to handle Escape key press
 * @param handler - Callback function to execute when Escape is pressed
 * @param enabled - Whether the hook should be active (default: true)
 */
export const useEscapeKey = (handler: (event: KeyboardEvent) => void, enabled: boolean = true) => {
  useEffect(() => {
    if (!enabled) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handler(event);
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [handler, enabled]);
};
