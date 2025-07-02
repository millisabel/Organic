import { BREAKPOINTS } from '@/constants/breakpoints';
import { useWindowWidth } from './useWindowWidth';

/**
 * @description Checks if a given width is below a specific breakpoint.
 * @param breakpoint - The breakpoint to check against.
 * @returns True if the width is below the breakpoint, false otherwise.
 */
export function useIsBelowBreakpoint(breakpoint: keyof typeof BREAKPOINTS): boolean {
  const width = useWindowWidth();
  return width < BREAKPOINTS[breakpoint];
}
