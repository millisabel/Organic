import { cn } from '@/utils/helpers';
import type { JSX } from 'react';
import type { HeaderContentProps } from './headerContent.types';
import { headerVariants } from './headerContent.variants';

const HeaderContent = ({
  text,
  level = 2,
  color,
  indents,
  font,
  size,
  className,
}: HeaderContentProps) => {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
  const classes = headerVariants({ color, indents, font, size });
  return (
    <HeadingTag className={cn(classes, className)} data-component="HeaderContent">
      {text}
    </HeadingTag>
  );
};

export default HeaderContent;
