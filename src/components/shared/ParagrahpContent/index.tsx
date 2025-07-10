import { cn } from '@/utils/helpers';
import type { ParagraphProps } from './paragrahpContent.types';
import { paragraphVariants } from './paragrahpContent.variants';

const ParagrahpContent = ({ text, size, font, align, color, className }: ParagraphProps) => {
  const classes = paragraphVariants({ size, font, align, color });
  return <p className={cn(classes, className)}>{text}</p>;
};

export default ParagrahpContent;
