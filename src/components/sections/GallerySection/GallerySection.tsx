import GalleryCard from '@/components/shared/Card/GalleryCard';
import UiList from '@/components/patterns/UiList';
import Section from '@/components/layout/Section/Section';
import type { GallerySectionProps } from './types';

const GallerySection = ({ data, ...props }: GallerySectionProps) => {
  return (
    <Section className="w-full py-40 bg-secondary-light" container={false} {...props}>
      <UiList
        variant="gridCol_lg_3"
        align="center_lg_st"
        items={data}
        renderItem={(item, idx) => <GalleryCard key={idx} data={item} />}
        className="gap-6"
        aria-label="Gallery grid"
      />
    </Section>
  );
};

export default GallerySection;
