import type { ButtonProps } from '@/components/ui/Button/types';
import { buttonVariants } from '@/components/ui/Button/variants';
import { useComponentState } from '@/hooks/useComponentState';
import { cn } from '@/utils/helpers';
import { Slot } from '@radix-ui/react-slot';
import * as React from 'react';

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
      disabled,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button';
    const { finalDisabled, finalState } = useComponentState<ButtonProps['state']>(
      {
        state,
        disabled,
      },
      ['disabled', 'loading'],
      'disabled',
      'default',
    );

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, state: finalState }), className)}
        ref={ref}
        type={asChild ? undefined : type}
        disabled={finalDisabled}
        {...props}
        data-component={nameComponent}
      >
        {children}
      </Comp>
    );
  },
);

export default Button;
