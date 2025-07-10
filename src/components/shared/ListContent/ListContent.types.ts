import type { VariantProps } from 'class-variance-authority';
import type { listItemsVariants, listVariants } from './listContent.variants';

export interface ListContentProps {
  items: string[];
  ordered?: boolean;
  font?: VariantProps<typeof listVariants>['font'];
  color?: VariantProps<typeof listVariants>['color'];
  indents?: VariantProps<typeof listVariants>['indents'];
  indentItems?: VariantProps<typeof listItemsVariants>['indentItems'];
  className?: string;
}
