import type { CardProps } from '@/components/ui/Card/types';

export interface CategoryDataProps extends CardProps {
  id: number;
  name: string;
  imageUrl: string;
}

export interface CategoryCardProps {
  data: CategoryDataProps;
}
