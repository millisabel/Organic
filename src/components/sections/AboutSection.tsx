// import FeatureCard from '@/components/shared/FeatureCard';
import TwoColumnSection from '../layout/sectionLayouts/TwoColumnSection';

interface AboutSectionProps {
  image: { src: string; alt: string };
  subtitle: string;
  title: string;
  description: string;
  button?: { text: string; onClick?: () => void };
}

export const AboutSection = ({
  image,
  title,
  subtitle,
  description,
  button,
  //   features,
}: AboutSectionProps) => {
  return (
    <TwoColumnSection
      image={image.src}
      title={title}
      subtitle={subtitle}
      description={description}
      button={button}
    >
      <div className="flex flex-col gap-4 mb-6">
        {/* {features.map((feature) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                iconPosition="left"
              />
            ))} */}
      </div>
    </TwoColumnSection>
  );
};
