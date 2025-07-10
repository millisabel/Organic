import Section from '@/components/layout/sectionLayouts/Section';
import SectionHeader from '@/components/layout/sectionLayouts/SectionHeader';
import HeroSection from '@/components/sections/HeroSection';
import QuoteContent from '@/components/shared/QuoteContent';
import {
  type ListBlock,
  type ParagraphBlock,
  type QuoteBlock,
} from '@/components/ui/Card/NewsCard';
import newsData from '@/data/news.json';
import { cn, getImageUrl } from '@/utils/helpers';
import { useParams } from 'react-router-dom';
import ParagraphContent from '@/components/shared/ParagrahpContent';

const BlogSinglePage = () => {
  const { postId } = useParams();
  const post = newsData.find((item) => String(item.id) === postId);
  const heroImg = getImageUrl('news', post?.imageUrl ?? '');

  const formatDate = new Date(post?.date ?? '').toLocaleDateString('en-US', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
  return (
    <>
      <HeroSection variant="single" bgImage={heroImg} />
      <Section>
        <div className="relative min-h-screen">
          <div className="absolute w-full -translate-y-1/2 bg-white rounded-2xl shadow-xl p-20">
            <div className="text-gray-500 text-sm mb-2">
              Posted On: {formatDate} &nbsp; | &nbsp; By {post?.author}
            </div>
            <SectionHeader title={post?.title} as="h1" titleAlignDesktop="text-left" />
            <p className="">{post?.description}</p>
          </div>

          <div className="pt-64 px-60">
            {post?.content.map((item, idx) => {
              if (item.type === 'paragraph') {
                const text = item as ParagraphBlock;
                return <ParagraphContent key={`p-${idx}`} text={text.text} />;
              }
              if (item.type === 'heading') {
                // Можно добавить поддержку разных уровней
                return (
                  <h2 key={`h-${idx}`} className="text-2xl font-bold">
                    {item.text}
                  </h2>
                );
              }
              if (item.type === 'list') {
                const list = item as ListBlock;
                return (
                  <ul
                    key={`l-${idx}`}
                    className={cn(list.ordered ? 'list-decimal' : 'list-disc', 'ml-6 my-2')}
                  >
                    {list.items.map((li: string, liIdx: number) => (
                      <li key={`li-${idx}-${liIdx}`}>{li}</li>
                    ))}
                  </ul>
                );
              }
              if (item.type === 'quote') {
                const quote = item as QuoteBlock;
                return <QuoteContent key={`q-${idx}`} text={quote.text} border="rounded" />;
              }
              return null;
            })}
          </div>
        </div>
      </Section>
    </>
  );
};

export default BlogSinglePage;
