import { cn } from '@/utils/helpers';
import { paragraphVariants } from './variants';
import type { ParagraphProps } from './types';

const Paragraph = ({ text, variant, className }: ParagraphProps) => {
  return (
    <p className={cn(paragraphVariants({ variant }), className)} data-component="Paragraph">
      {text}
    </p>
  );
};

export default Paragraph;
