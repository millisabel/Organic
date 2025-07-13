import productsData from '@/data/products.json';
import type { VariantProps } from 'class-variance-authority';
import Section from '../layout/sectionLayouts/Section';
import SectionHeader from '../layout/sectionLayouts/SectionHeader';
import NavigateButton from '../ui/Button/NavigateButton';
import { buttonVariants } from '../ui/Button/variants';
import ProductCard from '../ui/Card/ProductCard';
import CardList from '../shared/CardList';

interface OfferSectionProps {
  title: string;
  subtitle: string;
  button: {
    text: string;
    icon: React.ReactNode;
    variant: VariantProps<typeof buttonVariants>['variant'];
  };
  className?: string;
}

const OfferSection = ({ title, subtitle, button, className }: OfferSectionProps) => {
  return (
    <Section paddingY="py-[8vw]" dataComponent="OfferSection" className={className}>
      <div className="flex flex-col lg:flex-row items-end justify-between mb-16">
        <SectionHeader
          title={title}
          subtitle={subtitle}
          titleColor="text-white"
          marginBottom="mb-8 lg:mb-0"
          titleAlignDesktop="text-left"
        />
        <NavigateButton text={button.text} icon={button.icon} to="/shop" variant={button.variant} />
      </div>
      <CardList
        variant="default"
        items={productsData}
        CardComponent={ProductCard}
        itemsDisplay={4}
      />
    </Section>
  );
};

export default OfferSection;
