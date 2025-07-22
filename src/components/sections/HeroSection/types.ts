import type { SectionProps } from '@/components/layout/Section/types';
import type { VariantProps } from 'class-variance-authority';
import type { heroVariants } from './variants';

export interface HeroProps extends SectionProps {
  variant?: VariantProps<typeof heroVariants>['variant'];
}
