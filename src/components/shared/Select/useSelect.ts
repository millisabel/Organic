import { useClickOutside, useEscapeKey } from '@/hooks';
import { useRef, useState } from 'react';

/**
 * Hook for managing Select component state
 * @param options - Array of select options
 * @param value - Current selected value
 * @param onChange - Callback when selection changes
 * @param disabled - Whether the select is disabled
 * @returns Object with select state and handlers
 */
export const useSelect = <T = string>(
  options: { value: T; label: string; disabled?: boolean }[],
  value: T,
  onChange: (value: T) => void,
  disabled: boolean = false,
) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  // Use universal hooks for dropdown behavior
  useClickOutside(selectRef, () => setIsDropdownOpen(false), isDropdownOpen);
  useEscapeKey(() => setIsDropdownOpen(false), isDropdownOpen);

  const selectedOption = options.find((option) => option.value === value);

  const handleSelect = (optionValue: T) => {
    onChange(optionValue);
    setIsDropdownOpen(false);
  };

  const handleToggle = () => {
    if (!disabled) {
      setIsDropdownOpen(!isDropdownOpen);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleToggle();
    }
  };

  return {
    isDropdownOpen,
    selectRef,
    selectedOption,
    handleSelect,
    handleToggle,
    handleKeyDown,
  };
};
