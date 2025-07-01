import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { BREAKPOINTS } from '@/constants/breakpoints';
import { useWindowWidth } from '@/hooks/useWindowWidth';

/**
 * Merges multiple class values into a single string of class names.
 * @param inputs - The class values to merge.
 * @returns The merged class names.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Dynamically resolves the full URL for an asset located in the assets/images folder.
 * This is the correct way to handle dynamic image paths in Vite.
 * @param folder - The subfolder within 'assets/images' (e.g., 'products', 'teams').
 * @param name - The filename of the image (e.g., 'Banana.webp').
 * @returns The resolved URL for the asset.
 */
export const getImageUrl = (folder: string, name: string): string => {
  return new URL(`../assets/images/${folder}/${name}`, import.meta.url).href;
};

/**
 * Debounces a function to prevent it from being called too frequently.
 * @param func - The function to debounce.
 * @param waitFor - The time to wait before calling the function again.
 * @returns The debounced function.
 */
export function debounce<F extends (...args: unknown[]) => unknown>(func: F, waitFor: number) {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  const debounced = (...args: Parameters<F>) => {
    if (timeout !== null) {
      clearTimeout(timeout);
      timeout = null;
    }
    timeout = setTimeout(() => func(...args), waitFor);
  };

  return debounced as (...args: Parameters<F>) => void;
}

/**
 * Checks if a given width is below a specific breakpoint.
 * @param width - The width to check.
 * @param breakpoint - The breakpoint to check against.
 * @returns True if the width is below the breakpoint, false otherwise.
 */
export function useIsBelowBreakpoint(breakpoint: keyof typeof BREAKPOINTS): boolean {
  const width = useWindowWidth();
  return width < BREAKPOINTS[breakpoint];
}
