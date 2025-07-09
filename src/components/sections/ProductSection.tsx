import { Link } from 'react-router-dom';
import Section from '../layout/sectionLayouts/Section';
import SectionHeader from '../layout/sectionLayouts/SectionHeader';
import ProductList from '../shared/ProductList';
import { Button } from '../ui/Button';
import type { IProduct } from '../ui/Card/ProductCard/ProductCard.types';

import productsData from '@/data/products.json';
import { useIsBelowBreakpoint } from '@/hooks/useIsBelowBreakpoint';

interface IProductSectionProps {
  title: string;
  subtitle: string;
  button?: { text: string; onClick?: () => void; icon?: React.ReactNode };
}

const ProductSection = ({ title, subtitle, button }: IProductSectionProps) => {
  const isBelowLg = useIsBelowBreakpoint('lg');
  const isBelow2xl = useIsBelowBreakpoint('2xl');
  const productsToShowCount = isBelowLg ? 4 : isBelow2xl ? 6 : 8;

  const availableProducts = productsData.filter((p) => !p.isOutOfStock);
  const productsToDisplay = availableProducts.slice(0, productsToShowCount);

  return (
    <Section dataComponent="ProductSection">
      <SectionHeader title={title} subtitle={subtitle} />
      <ProductList products={productsToDisplay as IProduct[]} />
      {button && (
        <Button asChild className="mt-[100px]" variant="default" size="center">
          <Link to="/shop">
            {button.text} {button.icon}
          </Link>
        </Button>
      )}
    </Section>
  );
};

export default ProductSection;
