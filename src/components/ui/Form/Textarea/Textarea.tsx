import { cn } from '@/utils/helpers';
import { inputVariants } from '../Input/variant';
import type { TextareaProps } from './types';

const Textarea = ({ className, variant = 'default', ...props }: TextareaProps) => {
  return <textarea className={cn(inputVariants({ variant }), className)} {...props} />;
};

export default Textarea;
