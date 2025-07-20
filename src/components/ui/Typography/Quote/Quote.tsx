import { cn } from '@/utils/helpers';
import { quoteVariants } from './variants';
import type { QuoteProps } from './types';

const Quote = ({ children, variant, className, ...props }: QuoteProps) => {
  return (
    <blockquote
      className={cn(quoteVariants({ variant }), className)}
      data-component="Quote"
      {...props}
    >
      &quot;{children}&quot;
    </blockquote>
  );
};

export default Quote;
