import newsData from '@/data/news.json';
import { useMemo } from 'react';
import NewsCard, { type NewsCardProps } from '../ui/Card/NewsCard';

interface NewsListProps {
  count?: number;
}

const NewsList = ({ count = newsData.length }: NewsListProps) => {
  const news = useMemo(() => newsData.slice(0, count), [count]);
  const newsTyped = news as NewsCardProps[];
  return (
    <div className="flex-[2] grid grid-cols-1 lg:grid-cols-2 gap-6">
      {newsTyped.map((item, idx) => (
        <NewsCard key={idx} {...item} />
      ))}
    </div>
  );
};

export default NewsList;
