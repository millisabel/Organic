import { cn } from '@/utils/helpers';
import { Field } from 'formik';
import Input from '../Input';
import Label from '../Label';
import Textarea from '../Textarea';
import type { FormFieldProps } from './types';

const FormField = ({
  id,
  name,
  label,
  as = 'input',
  rows = 1,
  error,
  touched,
  placeholder,
  required,
  className,
  ...props
}: FormFieldProps) => {
  const hasError = error && touched;
  return (
    <div className={cn('relative', className)}>
      <Label
        htmlFor={id}
        text={`${label}${required ? '*' : ''}`}
        variant="contact"
        className="mb-4"
      />

      {hasError && <div className="absolute top-0 right-0 z-10 text-sm text-red-500">{error}</div>}

      <Field
        as={as === 'textarea' ? Textarea : Input}
        id={id}
        name={name}
        rows={as === 'textarea' ? rows : undefined}
        placeholder={placeholder}
        variant={'contact'}
        {...props}
      />
    </div>
  );
};

export default FormField;
