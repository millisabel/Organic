import type { ProductCardData } from '@/features/products/model';

interface StatusBlockProps {
  product: ProductCardData;
  isInCart: boolean;
  isOutOfStock: boolean;
  isNew: boolean;
  isSale: boolean;
  className?: string;
}

export type { StatusBlockProps };
