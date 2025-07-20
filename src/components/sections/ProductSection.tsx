import { Link } from 'react-router-dom';
import Section from '../layout/sectionLayouts/Section';
import SectionHeader from '../layout/sectionLayouts/SectionHeader';
import Button from '../ui/Button/Button';

import productsData from '@/data/products.json';
import UiList from '../patterns/UiList';
import ProductCard from '../ui/Card/ProductCard';

interface IProductSectionProps {
  title: string;
  subtitle: string;
  button?: { text: string; onClick?: () => void; icon?: React.ReactNode };
}

const ProductSection = ({ title, subtitle, button }: IProductSectionProps) => {
  return (
    <Section dataComponent="ProductSection">
      <SectionHeader title={title} subtitle={subtitle} />

      <UiList
        variant="grid"
        items={productsData}
        renderItem={(item, idx) => <ProductCard key={idx} data={item} />}
        itemsDisplay={8}
      />

      {button && (
        <Button asChild className="mt-[100px]" variant="default">
          <Link to="/shop">
            {button.text} {button.icon}
          </Link>
        </Button>
      )}
    </Section>
  );
};

export default ProductSection;
