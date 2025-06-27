import { cn } from '@/utils/helpers';
import type { VariantProps } from 'class-variance-authority';
import React from 'react';
import { iconVariants } from './variants';

type IconVariantProps = VariantProps<typeof iconVariants>;

interface IconProps
  extends Omit<React.SVGProps<SVGSVGElement>, 'color' | 'size'>,
    IconVariantProps {
  className?: string;
  children?: React.ReactNode;
}

const Icon: React.FC<IconProps> = ({
  variant,
  size,
  className,
  viewBox,
  fill,
  stroke,
  strokeWidth,
  children,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox={viewBox || '0 0 24 24'}
    className={cn(iconVariants({ variant, size, className }))}
    fill={fill || 'none'}
    stroke={stroke || 'currentColor'}
    strokeWidth={strokeWidth || '2'}
    aria-hidden="true"
    data-component="icon"
    {...props}
  >
    {children}
  </svg>
);

export default Icon;
