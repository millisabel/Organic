import { cn } from '@/utils/helpers';
import { paragraphVariants } from './variants';
import type { ParagraphProps } from './types';

const Paragraph = ({ children, variant, className, text, ...props }: ParagraphProps) => {
  const content = children || text;

  return (
    <p
      className={cn(paragraphVariants({ variant }), className)}
      data-component="Paragraph"
      {...props}
    >
      {content}
    </p>
  );
};

export default Paragraph;
