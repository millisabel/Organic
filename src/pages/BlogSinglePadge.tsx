import Section from '@/components/layout/sectionLayouts/Section';
import SectionHeader from '@/components/layout/sectionLayouts/SectionHeader';
import HeroSection from '@/components/sections/HeroSection';
import ArticleContent from '@/components/shared/ArticleContent';
import newsData from '@/data/news.json';
import { getImageUrl } from '@/utils/helpers';
import { useParams } from 'react-router-dom';
import type { NewsContentBlock } from '@/types/news.types';

const BlogSinglePage = () => {
  const { postId } = useParams();
  const post = newsData.find((item) => String(item.id) === postId);
  const heroImg = getImageUrl('news', post?.imageUrl ?? '');

  const formatDate = new Date(post?.date ?? '').toLocaleDateString('en-US', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  if (!post) {
    return <div className="text-center text-red-500">Post not found</div>;
  }

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
          <ArticleContent content={post.content as NewsContentBlock[]} className="pt-64 px-60" />
        </div>
      </Section>
    </>
  );
};

export default BlogSinglePage;
