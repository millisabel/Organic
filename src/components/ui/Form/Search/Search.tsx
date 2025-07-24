import Input from '@/components/ui/Form/Input';
import Label from '@/components/ui/Form/Label';
import { cn } from '@/utils/helpers';
import { forwardRef } from 'react';
import type { SearchProps } from './types';

const Search = forwardRef<HTMLInputElement, SearchProps>(
  (
    {
      id,
      placeholder = 'Search...',
      value,
      onChange,
      className,
      'aria-label': ariaLabel,
      labelVariant = 'hidden',
      inputVariant = 'search',
    },
    ref,
  ) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value);
    };

    return (
      <div className={cn('relative h-full', className)}>
        <Label variant={labelVariant || 'hidden'} htmlFor={id}>
          {ariaLabel || 'Search'}
        </Label>
        <Input
          type="search"
          variant={inputVariant}
          placeholder={placeholder}
          id={id}
          value={value}
          onChange={handleChange}
          ref={ref}
          aria-label={ariaLabel || 'Search'}
        />
      </div>
    );
  },
);

Search.displayName = 'Search';

export default Search;
