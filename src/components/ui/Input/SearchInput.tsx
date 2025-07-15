import React from 'react';
import { inputVariants } from './variant';

export interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: 'default' | 'search';
  inputSize?: 'default' | 'search';
}

const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  ({ variant = 'search', className, ...inputProps }, ref) => {
    const inputClass = inputVariants({ variant, className });

    return (
      <input
        ref={ref}
        type="search"
        className={inputClass}
        data-component="SearchInput"
        {...inputProps}
      />
    );
  },
);

SearchInput.displayName = 'SearchInput';

export default SearchInput;
