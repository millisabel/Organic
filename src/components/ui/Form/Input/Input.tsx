import { forwardRef } from 'react';
import type { InputProps } from './types';
import { inputVariants } from './variant';

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { variant = 'default', type = 'text', className, placeholder, id, showError, ...props },
    ref,
  ) => {
    return (
      <input
        id={id}
        type={type}
        className={inputVariants({ variant, className })}
        placeholder={placeholder}
        ref={ref}
        {...props}
      />
    );
  },
);

export default Input;
