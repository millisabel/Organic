import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merges multiple class values into a single string of class names.
 * @param inputs - The class values to merge.
 * @returns The merged class names.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Combines multiple refs into a single ref function
 * Useful when you need to forward a ref and also use it locally
 */
export function combineRefs<T>(...refs: Array<React.Ref<T> | undefined | null>) {
  return (node: T | null) => {
    refs.forEach((ref) => {
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    });
  };
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
 * Formats a date string or Date object into a specific date format.
 * @param date - The date string or Date object to format.
 * @param format - The format to use. Can be 'short' or 'long'.
 * @returns The formatted date string.
 */

export interface FormatDateProps {
  date: string | Date;
  format: 'short' | 'long';
}

export function formatDate({ date, format = 'long' }: FormatDateProps) {
  const d = new Date(date);
  if (format === 'short') {
    return d.toLocaleDateString('en-US', { day: '2-digit', month: 'short' });
  }
  return d.toLocaleDateString('en-US', { day: '2-digit', month: 'long', year: 'numeric' });
}
