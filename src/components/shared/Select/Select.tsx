import Button from '@/components/ui/Button/Button';
import { cn } from '@/utils/helpers';
import type { SelectProps } from './types';
import { useSelect } from './useSelect';

function Select<T = string>({
  options,
  value,
  onChange,
  placeholder = 'Select option',
  className = '',
  disabled = false,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedby,
}: SelectProps<T>) {
  const { isDropdownOpen, selectRef, selectedOption, handleSelect, handleToggle, handleKeyDown } =
    useSelect(options, value, onChange, disabled);

  const displayValue = selectedOption?.label || placeholder;

  return (
    <div className={cn('relative', className)} ref={selectRef}>
      <Button
        variant="outline"
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        className="flex items-center gap-2 w-full justify-between"
        aria-expanded={isDropdownOpen}
        aria-haspopup="listbox"
        aria-label={ariaLabel}
        aria-describedby={ariaDescribedby}
        disabled={disabled}
      >
        <span className="truncate">{displayValue}</span>
        <svg
          className={cn('w-4 h-4 transition-transform flex-shrink-0', {
            'rotate-180': isDropdownOpen,
          })}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </Button>

      {isDropdownOpen && (
        <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg z-10">
          <ul role="listbox" className="py-1 max-h-100 overflow-auto">
            {options.map((option) => (
              <li key={String(option.value)} role="option" aria-selected={value === option.value}>
                <button
                  type="button"
                  onClick={() => handleSelect(option.value)}
                  disabled={option.disabled}
                  className={cn(
                    'w-full text-left px-4 py-2 text-sm hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed',
                    {
                      'bg-gray-100 font-medium': value === option.value,
                    },
                  )}
                >
                  {option.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Select;
