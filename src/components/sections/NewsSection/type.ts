import type { SectionProps } from '@/components/layout/Section/types';
import type { NewsCardData } from '@/components/shared/Card/NewsCard/types';

export interface NewsSectionProps extends SectionProps {
  itemsDisplay?: number;
  data?: NewsCardData[];
}
