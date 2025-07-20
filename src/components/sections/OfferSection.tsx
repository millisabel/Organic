import Button from '@/components/ui/Button/Button';
import productsData from '@/data/products.json';
import type { VariantProps } from 'class-variance-authority';
import { Link } from 'react-router-dom';
import Section from '../layout/sectionLayouts/Section';
import SectionHeader from '../layout/sectionLayouts/SectionHeader';
import UiList from '../patterns/UiList';
import { buttonVariants } from '../ui/Button/variants';
import ProductCard from '../ui/Card/ProductCard';

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
        <Button asChild variant={button.variant}>
          <Link to="/shop">
            {button.text} {button.icon && <span className="ml-2">{button.icon}</span>}
          </Link>
        </Button>
      </div>
      <UiList
        variant="grid"
        items={productsData}
        renderItem={(item, idx) => <ProductCard key={idx} data={item} />}
        itemsDisplay={4}
      />
    </Section>
  );
};

export default OfferSection;
