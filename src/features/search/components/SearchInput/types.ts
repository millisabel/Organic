import type { InputProps } from '@/components/ui/Input/types';

export interface SearchInputProps extends InputProps {
  className?: string;
  id: string;
  ref?: React.RefObject<HTMLInputElement>;
}
