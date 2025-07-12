import type { VariantProps } from 'class-variance-authority';
import type cardListVariants from './variants';

export interface CardListProps<DataType, CardPropsType> {
  variant?: VariantProps<typeof cardListVariants>['variant'];
  items: DataType[];
  CardComponent: React.ComponentType<CardPropsType>;
  getKey: (item: DataType, idx: number) => React.Key;
  getCardProps: (item: DataType, idx: number) => CardPropsType;
  itemsDisplay?: number | 'all';
  className?: string;
}
