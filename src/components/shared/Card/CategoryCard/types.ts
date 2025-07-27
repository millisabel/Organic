import type { CardProps } from '@/components/ui/Card/types';

export interface CategoryDataProps extends CardProps {
  id: number;
  name: string;
  imageUrl: string;
  imageSize?: {
    width: number;
    height: number;
  };
}

export interface CategoryCardProps {
  data: CategoryDataProps;
}
