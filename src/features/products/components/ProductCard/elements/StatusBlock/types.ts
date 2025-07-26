import type { ProductCardData } from '@/features/products/model';

interface StatusBlockProps {
  product: ProductCardData;
  isInCart: boolean;
  className?: string;
}

export type { StatusBlockProps };
