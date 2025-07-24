import Section from '@/components/layout/Section/Section';
import SectionHeader from '@/components/layout/Section/SectionHeader';
import UiList from '@/components/patterns/UiList';
import NewsCard from '@/components/shared/Card/NewsCard';
import ArrowIcon from '@/components/shared/Icon/ArrowIcon';
import Pagination from '@/components/shared/Navigation/Pagination';
import { SearchWithFilter } from '@/components/shared/SearchWithFilter';
import Button from '@/components/ui/Button/Button';
import { useIsBelowBreakpoint } from '@/hooks/useIsBelowBreakpoint';
import { usePagination } from '@/hooks/usePagination';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import type { NewsSectionProps } from './type';

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

  const { displayedItems, currentPage, totalPages, goToPage, reset } = usePagination({
    data: filteredNews,
    itemsPerPage: itemsDisplay || 2,
  });

  const { scrollToTop } = useScrollToTop(sectionRef);

  // Custom page change handler with scroll to top
  const handlePageChange = useCallback(
    (page: number) => {
      goToPage(page);
      scrollToTop();
    },
    [goToPage, scrollToTop],
  );

  const handleFilteredDataChange = useCallback((filteredData: typeof data) => {
    setFilteredNews(filteredData);
  }, []);

  useEffect(() => {
    reset();
  }, [filteredNews, reset]);

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
            <Button asChild>
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
        items={displayedItems}
        renderItem={(item, idx) => <NewsCard key={idx} data={item} />}
        itemsDisplay="all"
      />

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-10">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            className="justify-center"
          />
        </div>
      )}

      {/* Fallback button for mobile when no pagination */}
      {totalPages <= 1 && isBelowLg && isButton && (
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
