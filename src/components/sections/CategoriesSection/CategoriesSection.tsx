import { cn } from '@/utils/helpers';
import Section from '@/components/layout/Section/Section';
import SectionHeader from '@/components/layout/Section/SectionHeader';
import UiList from '@/components/patterns/UiList';
import CategoryCard from '@/components/shared/Card/CategoryCard';
import type { CategoriesSectionProps } from './types';
import categoriesData from '@/data/categories.json';

const CategoriesSection = ({
  title,
  subtitle,
  backgroundColor,
  ...props
}: CategoriesSectionProps) => {
  return (
    <Section className={cn(backgroundColor, 'text-white py-[190px] my-60')} {...props}>
      <SectionHeader
        title={title}
        subtitle={subtitle}
        titleVariant="white"
        className="text-white text-center mb-20"
      />
      <UiList
        variant="gridCol_sm_2_lg_4"
        className="gap-8"
        items={categoriesData}
        renderItem={(item, idx) => <CategoryCard key={idx} data={item} />}
        itemsDisplay={4}
      />
    </Section>
  );
};

export default CategoriesSection;
