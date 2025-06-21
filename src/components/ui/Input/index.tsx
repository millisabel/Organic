import { clsx } from 'clsx';
import * as React from 'react';
import { type FC } from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  wrapperClassName?: string;
}

const Input: FC<InputProps> = ({ wrapperClassName, className, ...props }) => {
  return (
    <div className={clsx('relative w-full', wrapperClassName)}>
      <input
        className={clsx(
          'w-full rounded-lg border border-border bg-background px-4 py-2 text-text outline-none focus:ring-2 focus:ring-secondary',
          'placeholder:font-roboto placeholder:italic placeholder:text-placeholder-text',
          className,
        )}
        {...props}
      />
    </div>
  );
};

export { Input };
