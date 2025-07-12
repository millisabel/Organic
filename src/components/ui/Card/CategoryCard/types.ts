import type { CardProps } from '../card.types';

export interface CategoryDataProps extends CardProps {
  id: number;
  name: string;
  imageUrl: string;
}

export interface CategoryCardProps {
  category: CategoryDataProps;
}
