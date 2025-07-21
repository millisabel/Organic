import type { CardProps } from '@/components/ui/Card/types';

export interface ReviewCardProps extends CardProps {
  name: string;
  job: string;
  text: string;
  rating: number;
  image: string;
}
