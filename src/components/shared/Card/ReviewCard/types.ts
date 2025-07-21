import type { CardProps } from '@/components/ui/Card/types';

export interface ReviewCardData {
  name: string;
  job: string;
  text: string;
  rating: number;
  image: string;
}

export interface ReviewCardProps extends CardProps {
  data: ReviewCardData;
}
