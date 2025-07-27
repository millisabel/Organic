import Section from '@/components/layout/Section/Section';
import SectionHeader from '@/components/layout/Section/SectionHeader';
import ContentLayout from '@/components/patterns/ContentLayout';
import UiList from '@/components/patterns/UiList/UiList';
import GoToShop from '@/components/shared/Button/GoToShop/GoToShop';
import InfoBlock from '@/components/shared/ContentBlocks/InfoBlock/InfoBlock';
import Image from '@/components/ui/Image';
import Paragraph from '@/components/ui/Typography/Paragraph';
import { cn } from '@/utils/helpers';
import type { AboutSectionProps } from './types';
import type { FeatureDataProps } from '@/components/shared/ContentBlocks/InfoBlock/types';

const AboutSection = ({
  variant = 'home',
  title,
  subtitle,
  description,
  features,
  image,
  imageSize,
  ...props
}: AboutSectionProps) => {
  return (
    <Section {...props}>
      <ContentLayout variant="gridCol_md_2">
        <Image
          src={image}
          folder="backgrounds"
          width={imageSize?.width}
          height={imageSize?.height}
        />
        <div>
          <SectionHeader title={title} subtitle={subtitle} className="text-center md:text-start" />
          <UiList
            variant="flexCol"
            items={Array.isArray(description) ? description : [description]}
            renderItem={(item, idx) => <Paragraph key={idx}>{item}</Paragraph>}
            className="mb-6"
          />
          <UiList
            items={features}
            variant={variant === 'about' ? 'gridCol_lg_2' : 'flexCol'}
            className="mb-14"
            renderItem={(feature) => (
              <InfoBlock
                key={feature.title}
                item={feature as unknown as FeatureDataProps}
                className={cn(variant === 'about' ? 'flex-row ' : '')}
              />
            )}
          />
          <GoToShop className="m-auto md:m-0">Shop Now</GoToShop>
        </div>
      </ContentLayout>
    </Section>
  );
};

export default AboutSection;
