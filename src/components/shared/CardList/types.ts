import type { VariantProps } from 'class-variance-authority';
import type cardListVariants from './variants';

export interface CardListProps<DataType> {
  variant?: VariantProps<typeof cardListVariants>['variant'];
  items: DataType[];
  CardComponent: React.ComponentType<{ data: DataType }>;
  className?: string;
  itemsDisplay?: number | 'all';
}
