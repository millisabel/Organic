import FeatureCard from '@/components/ui/Card/FeatureCard';
import { getImageUrl } from '@/utils/helpers';
import ContentBlock from '../layout/contentLayouts/ContentBlock';
import TwoColumn from '../layout/contentLayouts/TwoColumn';
import Section from '../layout/sectionLayouts/Section';

interface AboutSectionProps {
  image: { src: string; alt: string };
  title: string;
  subtitle: string;
  description: string;
  button?: { text: string; onClick?: () => void; icon?: React.ReactNode };
  className?: string;
  features: Feature[];
  pageVariant?: string;
}

interface Feature {
  title: string;
  description: string;
  icon: string;
}

export const AboutSection = ({
  image,
  title,
  subtitle,
  description,
  button,
  className,
  features,
  pageVariant,
}: AboutSectionProps) => {
  const style = pageVariant === 'home' ? 'flex-col' : 'flex-row';

  return (
    <Section className={className}>
      <TwoColumn image={image.src} data-component="about-section" className="bg-background">
        <ContentBlock title={title} subtitle={subtitle} description={description} button={button}>
          <div className={`flex gap-4 mb-6 ${style}`}>
            {features.map((feature) => (
              <FeatureCard
                key={feature.title}
                src={getImageUrl('ico', feature.icon)}
                title={feature.title}
                view="row"
                description={feature.description}
                pageVariant={pageVariant}
              />
            ))}
          </div>
        </ContentBlock>
      </TwoColumn>
    </Section>
  );
};
