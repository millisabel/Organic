import type { FC } from 'react';
import { labelVariants } from './variants';
import type { LabelProps } from '.';
import { cn } from '@/utils/helpers';

const Label: FC<LabelProps> = ({ text, className, variant, children, htmlFor, ...props }) => {
  return (
    <label htmlFor={htmlFor} className={cn(labelVariants({ variant }), className)} {...props}>
      {text}
      {children && children}
    </label>
  );
};

export default Label;
