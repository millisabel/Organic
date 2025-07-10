import Section from '@/components/layout/sectionLayouts/Section';
import SectionHeader from '@/components/layout/sectionLayouts/SectionHeader';
import NavigateButton from '@/components/ui/Button/NavigateButton';

import type { buttonVariants } from '@/components/ui/Button/variants';
import type { VariantProps } from 'class-variance-authority';

import { useIsBelowBreakpoint } from '@/hooks/useIsBelowBreakpoint';
import NewsList from '../shared/NewsList';

interface NewsSectionProps {
  title?: string;
  subtitle?: string;
  button?: {
    text: string;
    icon: React.ReactNode;
    to: string;
    variant: VariantProps<typeof buttonVariants>['variant'];
  };
  count?: number;
}

const NewsSection: React.FC<NewsSectionProps> = ({ title, subtitle, button, count }) => {
  const isBelowLg = useIsBelowBreakpoint('lg');
  return (
    <Section className="py-10">
      <div className="flex flex-row justify-between items-end mb-16">
        <SectionHeader
          title={title}
          subtitle={subtitle}
          marginBottom="0"
          titleAlignDesktop="text-left"
        />
        {button && !isBelowLg && (
          <NavigateButton
            text={button?.text}
            icon={button?.icon}
            to={button?.to}
            variant={button?.variant}
          />
        )}
      </div>
      <NewsList count={count} />
      {button && isBelowLg && (
        <NavigateButton
          text={button?.text}
          icon={button?.icon}
          to={button?.to}
          variant={button?.variant}
          className="mt-10"
        />
      )}
    </Section>
  );
};

export default NewsSection;
