import type { SectionProps } from '@/components/layout/Section/types';
import type { BreadcrumbItem } from '@/components/shared/Navigation/Breadcrumbs/types';

export interface BreadcrumbsSectionProps extends SectionProps {
  items: BreadcrumbItem[];
}
