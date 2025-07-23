import Section from '@/components/layout/Section/Section';
import SectionHeader from '@/components/layout/Section/SectionHeader';
import UiList from '@/components/patterns/UiList';
import NewsCard from '@/components/shared/Card/NewsCard';
import ArrowIcon from '@/components/shared/Icon/ArrowIcon';
import Button from '@/components/ui/Button/Button';
import { useIsBelowBreakpoint } from '@/hooks/useIsBelowBreakpoint';
import { Link } from 'react-router-dom';
import type { NewsSectionProps } from './type';

const NewsSection = ({
  title,
  subtitle,
  itemsDisplay,
  isButton = true,
  id,
  data = [],
}: NewsSectionProps) => {
  const isBelowLg = useIsBelowBreakpoint('lg');
  return (
    <Section id={id} dataComponent="NewsSection">
      {(title || subtitle) && (
        <div className="flex flex-row justify-between items-end mb-4 lg:mb-16">
          <SectionHeader
            title={title}
            subtitle={subtitle}
            className="lg:w-1/2 text-center lg:text-left"
          />
          {!isBelowLg && isButton && (
            <Button asChild>
              <Link to="/blog">
                More News <ArrowIcon variant="arrow" size="md" />
              </Link>
            </Button>
          )}
        </div>
      )}
      <UiList
        variant="gridCol_md_2"
        items={data}
        renderItem={(item, idx) => <NewsCard key={idx} data={item} />}
        itemsDisplay={itemsDisplay}
      />
      {isBelowLg && isButton && (
        <Button asChild className="mt-10 mx-auto lg:mx-0">
          <Link to="/blog">
            More News <ArrowIcon variant="arrow" size="md" />
          </Link>
        </Button>
      )}
    </Section>
  );
};

export default NewsSection;
