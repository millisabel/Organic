import { cn } from '@/utils/helpers';
import type { QuoteContentProps } from './quoteContent.types';
import { quoteVariants } from './quoteContent.variants';

const QuoteContent = ({
  text,
  size,
  font,
  border,
  color,
  align,
  bg,
  className,
}: QuoteContentProps) => {
  const classes = quoteVariants({ size, font, border, color, align, bg });

  return <blockquote className={cn(classes, className)}>&quot;{text}&quot;</blockquote>;
};

export default QuoteContent;
