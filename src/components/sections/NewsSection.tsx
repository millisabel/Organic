import Section from '@/components/layout/Section/Section';
import SectionHeader from '@/components/layout/Section/SectionHeader';
import Button from '@/components/ui/Button/Button';

import type { buttonVariants } from '@/components/ui/Button/variants';
import type { VariantProps } from 'class-variance-authority';
import { Link } from 'react-router-dom';

import newsData from '@/data/news.json';
import { useIsBelowBreakpoint } from '@/hooks/useIsBelowBreakpoint';
import UiList from '../patterns/UiList';
import NewsCard from '../shared/Card/NewsCard';

interface NewsSectionProps {
  count?: number;
}

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
          <Button asChild variant={button?.variant}>
            <Link to={button?.to}>
              {button?.text} {button?.icon && <span className="ml-2">{button?.icon}</span>}
            </Link>
          </Button>
        )}
      </div>
      <UiList
        variant="default"
        items={newsData}
        renderItem={(item, idx) => <NewsCard key={idx} data={item} />}
        itemsDisplay={count}
      />
      {button && isBelowLg && (
        <Button asChild variant={button?.variant} className="mt-10">
          <Link to={button?.to}>
            {button?.text} {button?.icon && <span className="ml-2">{button?.icon}</span>}
          </Link>
        </Button>
      )}
    </Section>
  );
};

export default NewsSection;
