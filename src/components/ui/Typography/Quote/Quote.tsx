import { cn } from '@/utils/helpers';
import type { QuoteProps } from './types';
import { quoteVariants } from './variants';

const Quote = ({ children, variant, className, text, ...props }: QuoteProps) => {
  const content = children || text;

  return (
    <blockquote
      className={cn(quoteVariants({ variant }), className)}
      data-component="Quote"
      {...props}
    >
      &quot;{content}&quot;
    </blockquote>
  );
};

export default Quote;
