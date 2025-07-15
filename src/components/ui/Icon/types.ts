import type { VariantProps } from 'class-variance-authority';
import type { iconVariants } from './variants';

export type IconVariantProps = VariantProps<typeof iconVariants>;

export interface IconProps
  extends Omit<React.SVGProps<SVGSVGElement>, 'color' | 'size'>,
    IconVariantProps {
  className?: string;
  children?: React.ReactNode;
  nameComponent?: string;
}
