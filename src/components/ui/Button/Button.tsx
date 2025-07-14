import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/utils/helpers';
import { buttonVariants } from '@/components/ui/Button/variants';
import type { ButtonProps } from '@/components/ui/Button/types';

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      asChild = false,
      children,
      type = 'button',
      className,
      variant,
      size,
      state,
      nameComponent = 'Button',
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, state }), className)}
        ref={ref}
        type={asChild ? undefined : type}
        disabled={state === 'disabled' || state === 'loading'}
        {...props}
        data-component={nameComponent}
      >
        {children}
      </Comp>
    );
  },
);

export default Button;
