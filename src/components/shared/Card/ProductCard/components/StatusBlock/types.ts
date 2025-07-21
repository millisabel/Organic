import type { ProductCardData } from '@/components/shared/Card/ProductCard/types';

interface StatusBlockProps {
  product: ProductCardData;
  isInCart: boolean;
  className?: string;
}

export type { StatusBlockProps };
