import { Slot } from '@radix-ui/react-slot';
import { type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { cn } from '@/utils/helpers';

import ArrowIcon from '@/components/icons/ArrowIcon';
import { buttonVariants } from '@/components/ui/Button/variants';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  text?: string;
  showIcon?: boolean;
  children?: React.ReactNode;
  className?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, asChild = false, showIcon = false, text, children, ...props },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props}>
        <span className="flex items-center gap-2">
          {text}
          {showIcon && <ArrowIcon />}
          {children}
        </span>
      </Comp>
    );
  },
);
Button.displayName = 'Button';

export { Button };
