import Section from '@/components/layout/Section/Section';
import SectionHeader from '@/components/layout/Section/SectionHeader';
import ProductCard from '@/features/products/components/ProductCard/ProductCard';
import GoToShop from '@/components/shared/Button/GoToShop';
import UiList from '@/components/patterns/UiList';
import type { ProductCardData } from '@/features/products/model';
import type { OfferSectionProps } from './types';

const OfferSection = ({
  title,
  subtitle,
  products,
  className,
  itemsDisplay = 4,
}: OfferSectionProps) => {
  return (
    <Section paddingY="py-[8vw]" dataComponent="OfferSection" className={className}>
      <div className="flex flex-col lg:flex-row items-end justify-between mb-16">
        <SectionHeader
          title={title}
          subtitle={subtitle}
          className="mb-8 lg:mb-0 text-left text-white"
          titleVariant="white"
        />
        <GoToShop variant="accent_hover_white" />
      </div>
      <UiList
        variant="gridCol_sm_2_lg_3_xl_4"
        items={products}
        className="gap-6"
        renderItem={(item, idx) => (
          <ProductCard key={idx} data={item as unknown as ProductCardData} isAction={false} />
        )}
        itemsDisplay={itemsDisplay}
      />
    </Section>
  );
};

export default OfferSection;
