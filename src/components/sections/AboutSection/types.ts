import type { SectionProps } from '@/components/layout/Section/types';
import type { FeatureDataProps } from '@/components/shared/ContentBlocks/InfoBlock/types';

export interface AboutSectionProps extends Omit<SectionProps, 'children'> {
  variant?: 'home' | 'about';
  description: string | string[];
  features: FeatureDataProps[];
  image: string;
  imageSize?: {
    width: number;
    height: number;
  };
}
