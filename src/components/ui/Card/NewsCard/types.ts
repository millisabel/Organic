import type { FormatDateProps } from '@/utils/helpers';
import type { CardProps } from '../card.types';

export interface NewsCardData {
  id: number;
  date: string | Date;
  format?: FormatDateProps['format'];
  author: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface NewsCardProps extends CardProps {
  data: NewsCardData;
}
