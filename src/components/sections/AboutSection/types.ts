import type { SectionProps } from '@/components/layout/Section/types';

export interface AboutSectionProps extends Omit<SectionProps, 'children'> {
  variant?: 'home' | 'about';
  description: string | string[];
  features: FeatureProps[];
  image: string;
}

export interface FeatureProps {
  title: string;
  description: string;
  icon: string;
}
