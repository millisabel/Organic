import { Link } from 'react-router-dom';
import Section from '../layout/Section/Section';
import SectionHeader from '../layout/Section/SectionHeader';
import Badge from '../ui/Badge/Badge';
import Button from '../ui/Button/Button';

import ProductCard from '@/components/shared/Card/ProductCard/ProductCard';
import type { ProductCardData } from '@/components/shared/Card/ProductCard/types';
import productsData from '@/data/products.json';
import UiList from '../patterns/UiList';

interface IProductSectionProps {
  title: string;
  subtitle: string;
  button?: { text: string; onClick?: () => void; icon?: React.ReactNode };
  useSlots?: boolean; // New prop to demonstrate slots
}

const ProductSection = ({ title, subtitle, button, useSlots = false }: IProductSectionProps) => {
  return (
    <Section dataComponent="ProductSection">
      {useSlots ? (
        // Example with slots
        <SectionHeader
          slots={{
            title: <h2 className="text-4xl font-bold text-blue-600 order-2">🍎 {title}</h2>,
            subtitle: (
              <div className="order-1">
                <Badge variant="default" className="mb-2 bg-yellow-500">
                  Featured
                </Badge>
                <h3 className="text-xl text-gray-600">{subtitle}</h3>
              </div>
            ),
          }}
        />
      ) : (
        // Default usage
        <SectionHeader title={title} subtitle={subtitle} />
      )}

      <UiList
        variant="grid"
        items={productsData}
        renderItem={(item, idx) => (
          <ProductCard key={idx} data={item as unknown as ProductCardData} />
        )}
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
