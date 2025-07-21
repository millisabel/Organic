import categoriesData from '@/data/categories.json';
import { cn } from '@/utils/helpers';
import Section from '../layout/Section/Section';
import SectionHeader from '../layout/Section/SectionHeader';
import UiList from '../patterns/UiList';
import CategoryCard from '../shared/Card/CategoryCard';

interface CategoriesSectionProps {
  title: string;
  subtitle: string;
  backgroundColor?: string;
}

const CategoriesSection = ({ title, subtitle, backgroundColor }: CategoriesSectionProps) => {
  return (
    <Section className={cn(backgroundColor, 'text-white py-[190px]')}>
      <SectionHeader title={title} subtitle={subtitle} titleColor="text-white" />
      <UiList
        variant="grid"
        items={categoriesData}
        renderItem={(item, idx) => <CategoryCard key={idx} category={item} />}
        itemsDisplay={4}
      />
    </Section>
  );
};

export default CategoriesSection;
