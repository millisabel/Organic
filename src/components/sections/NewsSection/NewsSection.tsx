import Section from '@/components/layout/Section/Section';
import SectionHeader from '@/components/layout/Section/SectionHeader';
import UiList from '@/components/patterns/UiList';
import NewsCard from '@/components/shared/Card/NewsCard';
import ArrowIcon from '@/components/shared/Icon/ArrowIcon';
import { SearchWithFilter } from '@/components/shared/SearchWithFilter';
import Button from '@/components/ui/Button/Button';
import { useIsBelowBreakpoint } from '@/hooks/useIsBelowBreakpoint';
import { useCallback, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import type { NewsSectionProps } from './type';
import { useScrollToElement } from '@/hooks';

const NewsSection = ({
  title,
  subtitle,
  itemsDisplay,
  isButton = true,
  id,
  data = [],
  isSearch = true,
}: NewsSectionProps) => {
  const isBelowLg = useIsBelowBreakpoint('lg');
  const [filteredNews, setFilteredNews] = useState(data);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollToElement } = useScrollToElement({ delay: 300 });
  const handleClick = () => {
    scrollToElement('[data-component="NewsSection"]');
  };

  const handleFilteredDataChange = useCallback((filteredData: typeof data) => {
    setFilteredNews(filteredData);
  }, []);

  return (
    <Section ref={sectionRef} id={id} dataComponent="NewsSection">
      {(title || subtitle) && (
        <div className="flex flex-row justify-between items-end mb-4 lg:mb-16">
          <SectionHeader
            title={title}
            subtitle={subtitle}
            className="lg:w-1/2 text-center lg:text-left"
          />
          {!isBelowLg && isButton && (
            <Button asChild onClick={handleClick}>
              <Link to="/blog">
                More News <ArrowIcon variant="arrow" size="md" />
              </Link>
            </Button>
          )}
        </div>
      )}

      {isSearch && (
        <div className="mb-8">
          <SearchWithFilter
            data={data}
            searchFields={['title', 'author']}
            placeholder="Search news by title or author..."
            aria-label="Search news by title or author"
            className="max-w-md"
            inputVariant="news"
            onFilteredDataChange={handleFilteredDataChange}
          />
        </div>
      )}

      <UiList
        variant="gridCol_md_2"
        align="between"
        items={filteredNews}
        renderItem={(item, idx) => <NewsCard key={idx} data={item} />}
        itemsDisplay={itemsDisplay}
      />
    </Section>
  );
};

export default NewsSection;
