import type { VariantProps } from 'class-variance-authority';
import type Label from '@/components/ui/Form/Label';
import type Input from '@/components/ui/Form/Input';

export interface SearchProps {
  id?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
  'aria-label'?: string;
  labelVariant?: VariantProps<typeof Label>['variant'];
  inputVariant?: VariantProps<typeof Input>['variant'];
}
