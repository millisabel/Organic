import Section from '@/components/layout/Section/Section';
import Breadcrumbs from '@/components/shared/Navigation/Breadcrumbs/Breadcrumbs';
import type { BreadcrumbsSectionProps } from './types';

const BreadcrumbsSection = ({ items, ...props }: BreadcrumbsSectionProps) => {
  return (
    <Section id="breadcrumbs" paddingY="py-4" {...props}>
      <Breadcrumbs items={items} className="border-b border-border-light pb-2" />
    </Section>
  );
};

export default BreadcrumbsSection;
