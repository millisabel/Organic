import type { FC } from 'react';
import { labelVariants } from './variants';
import type { LabelProps } from '.';

const Label: FC<LabelProps> = ({ text, className, variant, children, htmlFor, ...props }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={labelVariants({
        className: labelVariants({ variant, className }),
      })}
      {...props}
    >
      {text}
      {children && children}
    </label>
  );
};

export default Label;
