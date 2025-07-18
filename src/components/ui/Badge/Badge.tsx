import { cn } from '@/utils/helpers';
import type { BadgeProps } from './types';
import { badgeVariants } from './variants';

/**
 * Badge component for displaying small pieces of information.
 * @file src/components/ui/Badge/Badge.tsx
 * @description Badge component for displaying small pieces of information.
 * @param {BadgeProps} props - The props for the Badge component.
 * @param {React.ReactNode} props.children - The content to display inside the badge.
 * @param {BadgeVariant} props.variant - The variant of the badge.
 * @param {string} props.className - Additional CSS classes.
 * @returns {JSX.Element} The Badge component.
 */
const Badge = ({ children, variant, className }: BadgeProps) => {
  return <div className={cn(badgeVariants({ variant }), className)}>{children}</div>;
};

export default Badge;
