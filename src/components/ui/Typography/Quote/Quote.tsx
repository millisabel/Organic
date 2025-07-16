import { cn } from '@/utils/helpers';
import { quoteVariants } from './variants';
import type { QuoteProps } from './types';

const Quote = ({ text, variant, className }: QuoteProps) => {
  return (
    <blockquote className={cn(quoteVariants({ variant }), className)} data-component="Quote">
      &quot;{text}&quot;
    </blockquote>
  );
};

export default Quote;
