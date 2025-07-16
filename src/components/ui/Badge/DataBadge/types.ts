import type { FormatDateProps } from '@/utils/helpers';

export interface DataBadgeProps {
  date: string | Date;
  format?: FormatDateProps['format'];
  className?: string;
}
