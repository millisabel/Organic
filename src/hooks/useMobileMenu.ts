import { useRef, useState } from 'react';
import { useClickOutside, useEscapeKey } from './index';

/**
 * Hook for managing mobile menu state with click outside and escape key handling
 * @param initialState - Initial open state (default: false)
 * @returns Object with menu state and control functions
 */
export const useMobileMenu = (initialState: boolean = false) => {
  const [isOpen, setIsOpen] = useState(initialState);
  const menuRef = useRef<HTMLDivElement>(null);

  useClickOutside(menuRef, () => setIsOpen(false), isOpen);
  useEscapeKey(() => setIsOpen(false), isOpen);

  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return {
    isOpen,
    menuRef,
    openMenu,
    closeMenu,
    toggleMenu,
  };
};
