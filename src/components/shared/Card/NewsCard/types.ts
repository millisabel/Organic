import type { FormatDateProps } from '@/utils/helpers';
import type { ReactNode } from 'react';
import type { CardProps } from '@/components/ui/Card/types';

export interface NewsCardData {
  id: number;
  date: string | Date;
  format?: FormatDateProps['format'];
  author: string;
  title: string;
  description: string;
  imageUrl: string;
  [key: string]: unknown;
}

export interface NewsCardSlots {
  badge?: ReactNode;
  button?: ReactNode;
  author?: ReactNode;
}

export interface NewsCardProps extends CardProps {
  data: NewsCardData;
  slots?: NewsCardSlots;
}
