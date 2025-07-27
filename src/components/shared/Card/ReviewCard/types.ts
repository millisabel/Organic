import type { CardProps } from '@/components/ui/Card/types';

export interface ReviewCardData {
  id?: string | number;
  name: string;
  job: string;
  text: string;
  rating: number;
  image: string;
  imageSize: {
    width: number;
    height: number;
  };
  [key: string]: unknown;
}

export interface ReviewCardProps extends CardProps {
  data: ReviewCardData;
}
