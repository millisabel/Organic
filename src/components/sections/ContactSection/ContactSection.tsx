import Section from '@/components/layout/Section/Section';
import SectionHeader from '@/components/layout/Section/SectionHeader';
import ContentLayout from '@/components/patterns/ContentLayout';
import UiList from '@/components/patterns/UiList';
import SocialButton from '@/components/shared/Button/SocialButton';
import InfoBlock from '@/components/shared/ContentBlocks/InfoBlock/InfoBlock';
import Image from '@/components/ui/Image';
import { Paragraph } from '@/components/ui/Typography';
import { useContactData } from '@/hooks/useContactData';
import type { FeatureDataProps } from '@/components/shared/ContentBlocks/InfoBlock/types';
import type { ContactSectionProps } from './types';

const ContactSection = ({ title, description }: ContactSectionProps) => {
  const { emailItems, phoneItems, socialLinks } = useContactData();
  const clickableContactLinks = emailItems.concat(phoneItems);

  return (
    <Section>
      <ContentLayout variant="gridCol_lg_2">
        <Image
          folder="contact"
          src="contact.webp"
          alt={title}
          className="flex justify-center rounded-2xl overflow-hidden"
          width={623}
          height={640}
        />
        <div className="flex flex-col items-center lg:items-start gap-y-6 lg:pl-4">
          <SectionHeader title={title} className="mb-2 text-center lg:text-left" />
          <Paragraph className="text-center lg:text-left">{description}</Paragraph>

          <address className="not-italic">
            <UiList
              items={clickableContactLinks}
              variant="flexCol"
              className="gap-y-6 mb-6 items-start"
              renderItem={(item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${item.title} - ${item.href}`}
                  className="w-full block transition-transform duration-200 hover:scale-105 focus:scale-105"
                >
                  <InfoBlock
                    item={item as unknown as FeatureDataProps}
                    className="rounded-2xl px-4 py-2 shadow-lg border border-gray-200 hover:border-primary hover:shadow-2xl transition-all duration-300"
                  />
                </a>
              )}
            />
          </address>

          <nav aria-label="Social media links">
            <UiList
              items={socialLinks}
              variant="flexRow"
              renderItem={(item, idx) => (
                <SocialButton
                  key={idx}
                  socialType={item.socialType}
                  href={item.href}
                  variant="social"
                  aria-label={`Follow us on ${item.socialType}`}
                />
              )}
              className="justify-center lg:justify-start gap-x-2"
            />
          </nav>
        </div>
      </ContentLayout>
    </Section>
  );
};

export default ContactSection;
