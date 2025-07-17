import type { FormatDateProps } from '@/utils/helpers';

export interface PostMetaInfoProps {
  format?: FormatDateProps['format'];
  author?: string;
  date: string | Date;
  className?: string;
}
