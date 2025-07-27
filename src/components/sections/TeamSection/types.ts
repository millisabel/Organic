import type { SectionProps } from '@/components/layout/Section';

export interface TeamSectionProps extends SectionProps {
  description?: string;
  isButton?: boolean;
  itemsDisplay?: number;
}
