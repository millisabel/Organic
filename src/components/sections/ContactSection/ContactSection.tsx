import Section from '@/components/layout/Section/Section';
import SectionHeader from '@/components/layout/Section/SectionHeader';
import ContentLayout from '@/components/patterns/ContentLayout';
import UiList from '@/components/patterns/UiList';
import SocialButton from '@/components/shared/Button/SocialButton';
import InfoBlock from '@/components/shared/ContentBlocks/InfoBlock/InfoBlock';
import Image from '@/components/ui/Image';
import { Paragraph } from '@/components/ui/Typography';
import { useContactData } from '@/hooks/useContactData';
import type { ContactSectionProps } from './types';

const ContactSection = ({ title, description }: ContactSectionProps) => {
  const { contactLinks, socialLinks } = useContactData();
  const clickableContactLinks = contactLinks.filter((link) => link.title !== 'Address');

  return (
    <Section>
      <ContentLayout variant="gridColumn_2_lg">
        <Image
          folder="contact"
          src="contact.webp"
          alt={title}
          className="flex justify-center rounded-2xl overflow-hidden"
        />
        <div className="flex flex-col items-center lg:items-start gap-y-6 lg:pl-4">
          <SectionHeader title={title} className="mb-2 text-center lg:text-left" />
          <Paragraph className="text-center lg:text-left">{description}</Paragraph>

          <address className="not-italic">
            <UiList
              items={clickableContactLinks}
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
                    description={item.href}
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
