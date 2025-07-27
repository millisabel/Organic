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

const AboutSection = ({
  variant = 'home',
  title,
  subtitle,
  description,
  features,
  image,
  ...props
}: AboutSectionProps) => {
  return (
    <Section {...props}>
      <ContentLayout variant="gridCol_md_2">
        <Image src={image} folder="backgrounds" alt={title} />
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
            variant={variant === 'about' ? 'gridCol_md_2' : 'flexCol'}
            className="mb-6"
            renderItem={(feature) => (
              <InfoBlock
                key={feature.title}
                iconSrc={feature.icon}
                title={feature.title}
                description={feature.description}
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
