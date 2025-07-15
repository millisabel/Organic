import { useWindowWidth } from './useWindowWidth';

export function useResponsiveItemsCount(breakpoints: { [key: string]: number }) {
  const width = useWindowWidth();
  if (width < 640) return breakpoints.xs ?? 1;
  if (width < 1024) return breakpoints.sm ?? 2;
  if (width < 1280) return breakpoints.md ?? 4;
  return breakpoints.lg ?? 6;
}
