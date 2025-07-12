import NewsCard from '@/components/ui/Card/NewsCard';
import type { NewsCardProps } from '@/components/ui/Card/NewsCard/types';
import newsData from '@/data/news.json';
import { useMemo } from 'react';

interface NewsListProps {
  count?: number;
}

const NewsList = ({ count = newsData.length }: NewsListProps) => {
  const news = useMemo(() => newsData.slice(0, count), [count]);
  const newsTyped = news as NewsCardProps[];
  return (
    <div>
      {newsTyped.map((item, idx) => (
        <NewsCard key={idx} {...item} />
      ))}
    </div>
  );
};

export default NewsList;
