import type { InputProps } from '../Input/types';

export interface FormFieldProps extends Omit<InputProps, 'id'> {
  id: string;
  label: string;
  name: string;
  error?: string;
  touched?: boolean;
  required?: boolean;
  as?: 'input' | 'textarea';
  rows?: number;
  showError?: boolean;
}
