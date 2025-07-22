import type { SectionProps } from '../../layout/Section/types';
import type { ReviewCardData } from '@/components/shared/Card/ReviewCard/types';
import type { FastItemData } from '@/components/shared/ContentBlocks/FastItem/types';

export interface TestimonialProps extends SectionProps {
  title: string;
  subtitle: string;
  reviews: ReviewCardData[];
  facts: FastItemData[];
}
