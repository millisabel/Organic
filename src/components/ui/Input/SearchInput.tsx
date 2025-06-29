import { inputVariants } from './variant';
import React from 'react';

export interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: 'default' | 'search';
  inputSize?: 'default' | 'search';
}

const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  ({ variant = 'search', inputSize = 'search', className, ...inputProps }, ref) => {
    const inputClass = inputVariants({ variant, inputSize, className });

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
