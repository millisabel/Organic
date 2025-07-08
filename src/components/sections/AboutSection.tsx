import FeatureCard from '@/components/ui/Card/FeatureCard';
import { useCurrentPage } from '@/hooks/useCurrentPage';
import { getImageUrl } from '@/utils/helpers';
import ContentBlock from '../layout/contentLayouts/ContentBlock';
import TwoColumn from '../layout/contentLayouts/TwoColumn';
import Section from '../layout/sectionLayouts/Section';

interface AboutSectionProps {
  image: { src: string; alt: string };
  title: string;
  subtitle: string;
  description: string | string[];
  button?: { text: string; onClick?: () => void; icon?: React.ReactNode };
  className?: string;
  features: Feature[];
}

interface Feature {
  title: string;
  description: string;
  icon: string;
}

const AboutSection = ({
  image,
  title,
  subtitle,
  description,
  button,
  className,
  features,
}: AboutSectionProps) => {
  const currentPage = useCurrentPage();
  const style = currentPage === 'home' ? 'flex-col' : 'flex-col lg:flex-row';

  return (
    <Section className={className} dataComponent="AboutSection">
      <TwoColumn image={image.src} className="bg-background">
        <ContentBlock title={title} subtitle={subtitle} description={description} button={button}>
          <div className={`flex gap-4 mb-6 ${style}`}>
            {features.map((feature) => (
              <FeatureCard
                key={feature.title}
                src={getImageUrl('ico', feature.icon)}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </ContentBlock>
      </TwoColumn>
    </Section>
  );
};

export default AboutSection;
