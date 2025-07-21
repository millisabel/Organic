import type { CardProps } from '../types';

export interface CategoryDataProps extends CardProps {
  id: number;
  name: string;
  imageUrl: string;
}

export interface CategoryCardProps {
  category: CategoryDataProps;
}
