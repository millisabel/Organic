import Section from '@/components/layout/Section/Section';
import SectionHeader from '@/components/layout/Section/SectionHeader';
import type { SectionProps } from '@/components/layout/Section/types';
import ProductCard from '@/components/shared/Card/ProductCard/ProductCard';
import type { ProductCardData } from '@/components/shared/Card/ProductCard/types';
import UiList from '../patterns/UiList';
import GoToShop from '../shared/Button/GoToShop';

interface ProductSectionProps extends SectionProps {
  products: ProductCardData[];
  itemsDisplay?: number;
}

const ProductSection = ({ title, subtitle, products, itemsDisplay = 8 }: ProductSectionProps) => {
  const displayedProducts = products.slice(0, itemsDisplay);

  return (
    <Section dataComponent="ProductSection">
      <SectionHeader title={title} subtitle={subtitle} className="text-center mb-20" />
      <UiList
        variant="gridCol_sm_2_lg_4"
        items={displayedProducts}
        className="gap-6 mb-20"
        renderItem={(item, idx) => (
          <ProductCard key={idx} data={item as unknown as ProductCardData} />
        )}
        itemsDisplay="all"
      />

      <GoToShop variant="default" className="mx-auto" />
    </Section>
  );
};

export default ProductSection;
