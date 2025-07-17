import { cn } from '@/utils/helpers';
import type { JSX } from 'react';
import { titleVariants } from './variants';
import type { TitleProps } from './types';

const Title = ({ children, variant, level = 2, className }: TitleProps) => {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
  return (
    <HeadingTag className={cn(titleVariants({ variant }), className)} data-component="Title">
      {children}
    </HeadingTag>
  );
};

export default Title;
