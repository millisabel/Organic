import { cn } from '@/utils/helpers';
import { Slot } from '@radix-ui/react-slot';
import { type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { buttonVariants } from '@/components/ui/Button/variants';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  text?: string;
  children?: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, text, children, icon, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    const contentArray = [text, children].filter(Boolean);

    const content =
      contentArray.length > 1 ? (
        <span className="flex items-center gap-2">{contentArray}</span>
      ) : (
        contentArray[0]
      );

    const shouldWrap = React.Children.count(content) > 1 || (typeof text !== 'undefined' && true);

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
        data-component="Button"
      >
        {shouldWrap ? (
          <span className="flex items-center gap-2">
            {content}
            {icon}
          </span>
        ) : (
          content
        )}
      </Comp>
    );
  },
);
Button.displayName = 'Button';

export { Button };
