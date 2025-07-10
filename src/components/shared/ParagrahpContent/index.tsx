import { cn } from '@/utils/helpers';
import type { ParagraphProps } from './ParagrahpContent.types';
import { paragraphVariants } from './ParagrahpContent.variants';

const ParagrahpContent = ({ text, size, font, align, color, className }: ParagraphProps) => {
  const classes = paragraphVariants({ size, font, align, color });
  return <p className={cn(classes, className)}>{text}</p>;
};

export default ParagrahpContent;
