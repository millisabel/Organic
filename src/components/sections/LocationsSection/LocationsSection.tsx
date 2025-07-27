import Section from '@/components/layout/Section/Section';
import SectionHeader from '@/components/layout/Section/SectionHeader';
import ContentLayout from '@/components/patterns/ContentLayout';
import { Paragraph } from '@/components/ui/Typography';
import type { LocationsSectionProps } from './types';
import { useContactData } from '@/hooks/useContactData';
import UiList from '@/components/patterns/UiList';
import InfoBlock from '@/components/shared/ContentBlocks/InfoBlock/InfoBlock';

const LocationsSection = ({
  title,
  subtitle,
  backgroundImageUrl,
  description,
}: LocationsSectionProps) => {
  const { addressItems } = useContactData();
  return (
    <div className="container flex flex-col gap-4">
      <Section
        container={false}
        className="rounded-2xl px-0 lg:px-4"
        backgroundImageUrl={backgroundImageUrl}
        dataComponent="LocationsSection"
      >
        <ContentLayout variant="gridCol_lg_2" className="rounded-2xl">
          <div className="hidden lg:block"></div>
          <ContentLayout variant="flexCol" className="bg-white rounded-2xl p-4 lg:p-10 mx-4">
            <SectionHeader title={title} subtitle={subtitle} />
            <Paragraph>{description}</Paragraph>
            <UiList
              variant="flexCol"
              items={addressItems}
              className="gap-y-6 mb-6"
              renderItem={(item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${item.title} - ${item.href}`}
                  className="block transition-transform duration-200 hover:scale-105 focus:scale-105"
                >
                  <InfoBlock
                    iconSrc={item.icon}
                    title={item.title}
                    description={item.text}
                    className="rounded-2xl px-4 py-2 hover:outline hover:outline-secondary hover:shadow-2xl transition-all duration-300"
                  />
                </a>
              )}
            />
          </ContentLayout>
        </ContentLayout>
      </Section>
    </div>
  );
};

export default LocationsSection;
