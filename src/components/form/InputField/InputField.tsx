import Input from '@/components/ui/Input/Input';
import Label from '@/components/ui/Label/Label';
import type { VariantProps } from 'class-variance-authority';
import { useId } from 'react';
import { inputFieldVariants } from './variants';

interface InputFieldProps {
  type?: string;
  variant?: VariantProps<typeof inputFieldVariants>['variant'];
  className?: string;
  label?: string;
  placeholder?: string;
}

const InputField = ({
  type = 'text',
  variant = 'default',
  className,
  label = '',
  placeholder = 'Enter your text',
}: InputFieldProps) => {
  const id = useId();
  return (
    <div className={inputFieldVariants({ variant, className })}>
      <Label htmlFor={id} variant="default">
        {label}
      </Label>
      <Input id={id} type={type} variant="quantity" placeholder={placeholder} />
    </div>
  );
};

export default InputField;
