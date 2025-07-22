import { cn } from '@/utils/helpers';
import Section from '@/components/layout/Section/Section';
import SectionHeader from '@/components/layout/Section/SectionHeader';
import Layout from '@/components/patterns/ContentLayout';
import UiList from '@/components/patterns/UiList/UiList';
import InfoBlock from '@/components/shared/ContentBlocks/InfoBlock/InfoBlock';
import Image from '@/components/ui/Image';
import Paragraph from '@/components/ui/Typography/Paragraph';
import GoToShop from '@/components/shared/Button/GoToShop/GoToShop';
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
      <Layout variant="gridColumn_2">
        <div>
          <Image src={image} folder="backgrounds" alt={title} className="object-scale-down" />
        </div>
        <div>
          <SectionHeader title={title} subtitle={subtitle} className="text-center md:text-start" />
          <UiList
            items={Array.isArray(description) ? description : [description]}
            renderItem={(item, idx) => <Paragraph key={idx}>{item}</Paragraph>}
            className="mb-6"
          />
          <UiList
            items={features}
            variant={variant === 'about' ? 'gridColumn_2' : 'default'}
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
      </Layout>
    </Section>
  );
};

export default AboutSection;
