import { clsx } from 'clsx';
import * as React from 'react';
import { type FC } from 'react';
import { type VariantProps } from 'class-variance-authority';
import { inputVariants } from './variant';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  wrapperClassName?: string;
}

const Input: FC<InputProps> = ({ wrapperClassName, className, variant, inputSize, ...props }) => {
  return (
    <div className={clsx('relative w-full', wrapperClassName)} data-component="Input">
      <input className={inputVariants({ variant, inputSize, className })} {...props} />
    </div>
  );
};

export { Input };
