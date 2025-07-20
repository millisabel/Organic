import { cn } from '@/utils/helpers';
import { paragraphVariants } from './variants';
import type { ParagraphProps } from './types';

const Paragraph = ({ children, variant, className, ...props }: ParagraphProps) => {
  return (
    <p
      className={cn(paragraphVariants({ variant }), className)}
      data-component="Paragraph"
      {...props}
    >
      {children}
    </p>
  );
};

export default Paragraph;
