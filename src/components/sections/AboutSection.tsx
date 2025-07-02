import FeatureCard from '@/components/ui/Card/FeatureCard';
import featuresAbout from '@/data/featuresAbout.json';
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
}

export const AboutSection = ({
  image,
  title,
  subtitle,
  description,
  button,
  className,
}: AboutSectionProps) => {
  return (
    <Section className={className}>
      <TwoColumn image={image.src} data-component="about-section" className="bg-background">
        <ContentBlock title={title} subtitle={subtitle} description={description} button={button}>
          <div className="flex flex-col gap-4 mb-6">
            {featuresAbout.features.map((feature) => (
              <FeatureCard
                key={feature.title}
                src={getImageUrl('ico', feature.icon)}
                title={feature.title}
                description={feature.description}
                iconPosition="left"
              />
            ))}
          </div>
        </ContentBlock>
      </TwoColumn>
    </Section>
  );
};
