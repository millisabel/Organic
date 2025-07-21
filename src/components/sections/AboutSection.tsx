import FeatureItem from '@/components/shared/ContentBlocks/InfoBlock/InfoBlock';
import { useCurrentPage } from '@/hooks/useCurrentPage';
import { getImageUrl } from '@/utils/helpers';
import Section from '../layout/Section/Section';
import SectionHeader from '../layout/Section/SectionHeader';

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

const AboutSection = ({ image, title, subtitle, className, features }: AboutSectionProps) => {
  const currentPage = useCurrentPage();
  const style = currentPage === 'home' ? 'flex-col' : 'flex-col lg:flex-row';

  return (
    <Section className={className}>
      <SectionHeader title={title} subtitle={subtitle} />
      <div className={`flex gap-4 mb-6 ${style}`}>
        {features.map((feature) => (
          <FeatureItem
            key={feature.title}
            iconSrc={getImageUrl('ico', feature.icon)}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </Section>
  );
};

export default AboutSection;
