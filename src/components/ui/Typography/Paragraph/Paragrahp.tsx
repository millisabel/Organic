import { cn } from '@/utils/helpers';
import { paragraphVariants } from './variants';
import type { ParagraphProps } from './types';

const Paragraph = ({ children, variant, className }: ParagraphProps) => {
  return (
    <p className={cn(paragraphVariants({ variant }), className)} data-component="Paragraph">
      {children}
    </p>
  );
};

export default Paragraph;
