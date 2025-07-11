import type { FormatDateProps } from '@/utils/helpers';

export interface NewsCardProps {
  id: number;
  date: string;
  format?: FormatDateProps['format'];
  author: string;
  title: string;
  description: string;
  imageUrl: string;
  onClick?: () => void;
}
