import type { VariantProps } from 'class-variance-authority';
import type { TextareaHTMLAttributes } from 'react';
import { inputVariants } from '../Input/variant';

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof inputVariants> {}
