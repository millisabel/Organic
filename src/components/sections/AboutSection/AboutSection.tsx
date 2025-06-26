// import FeatureCard from '@/components/shared/FeatureCard';
import Section from '@/components/shared/Section';
import { Button } from '@/components/ui/Button';
import SectionHeader from '@/components/shared/SectionHeader';

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
    <Section className="bg-white">
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 flex justify-center mb-8 md:mb-0">
          <img src={image.src} alt={image.alt} className="max-w-full" />
        </div>
        <div className="flex-1 max-w-xl">
          <SectionHeader title={title} subtitle={subtitle} titleAlignDesktop="text-left" />
          <p className="text-neutral-500 mb-6">{description}</p>
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
          {button && (
            <Button
              className="bg-primary text-white rounded-2xl px-8 py-3 font-bold shadow-md hover:bg-accent transition"
              onClick={button.onClick}
            >
              {button.text}
            </Button>
          )}
        </div>
      </div>
    </Section>
  );
};
