import { cn } from '@/utils/helpers';
import React from 'react';
import type { IconProps } from '.';
import { iconVariants } from './variants';

const Icon: React.FC<IconProps> = ({
  className,
  nameComponent = 'Icon',
  children,
  variant,
  size,
  viewBox = '0 0 24 24',
  fill = 'none',
  stroke = 'currentColor',
  strokeWidth = '2',
  rounded,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox={viewBox}
    className={cn(iconVariants({ variant, size, rounded, className }))}
    fill={fill}
    stroke={stroke}
    strokeWidth={strokeWidth}
    aria-hidden="true"
    data-component={nameComponent}
    {...props}
  >
    {children ? (
      children
    ) : (
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="central"
        fontSize="16"
        fill="currentColor"
      >
        ?
      </text>
    )}
  </svg>
);

export default Icon;
