import type { titleVariants } from '@/components/ui/Typography/Title/variants';
import type { VariantProps } from 'class-variance-authority';
import type { sectionHeaderVariants } from './variants';

export interface SectionHeaderProps {
  title?: string;
  subtitle?: string;
  titleLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  subtitleLevel?: 2 | 3 | 4 | 5 | 6;
  variant?: VariantProps<typeof sectionHeaderVariants>['variant'];
  titleVariant?: VariantProps<typeof titleVariants>['variant'];
  subtitleVariant?: VariantProps<typeof titleVariants>['variant'];
  className?: string;
}
