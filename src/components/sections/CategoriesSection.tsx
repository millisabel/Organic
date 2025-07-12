import categoriesData from '@/data/categories.json';
import { cn } from '@/utils/helpers';
import Section from '../layout/sectionLayouts/Section';
import SectionHeader from '../layout/sectionLayouts/SectionHeader';
import CardList from '../shared/CardList';
import CategoryCard from '../ui/Card/CategoryCard';

interface CategoriesSectionProps {
  title: string;
  subtitle: string;
  backgroundColor?: string;
}

const CategoriesSection = ({ title, subtitle, backgroundColor }: CategoriesSectionProps) => {
  return (
    <Section className={cn(backgroundColor, 'text-white py-[190px]')}>
      <SectionHeader title={title} subtitle={subtitle} titleColor="text-white" />
      <CardList
        variant="categories"
        items={categoriesData}
        CardComponent={CategoryCard}
        getKey={(_, index) => index}
        getCardProps={(item) => ({ category: item })}
        itemsDisplay={4}
      />
    </Section>
  );
};

export default CategoriesSection;
