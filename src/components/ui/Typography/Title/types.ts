import type { VariantProps } from 'class-variance-authority';
import type { ReactNode } from 'react';
import { titleVariants } from './variants';

export interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  variant?: VariantProps<typeof titleVariants>['variant'];
  className?: string;
}
