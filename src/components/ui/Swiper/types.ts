import type { ReactNode } from 'react';
import type { SwiperProps as SwiperComponentProps } from 'swiper/react';

export interface SwiperItem {
  id?: string | number;
  [key: string]: unknown;
}

export interface CustomSwiperProps<T = SwiperItem> extends Omit<SwiperComponentProps, 'children'> {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
  className?: string;
  ariaLabel?: string;
}
