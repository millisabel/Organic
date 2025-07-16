import HeaderContent from '@/components/shared/HeaderContent';
import { Paragraph } from '@/components/ui/Typography';
import { cn } from '@/utils/helpers';
import PostMetaInfo from '../postMetaInfo';
import type { IntroContentProps } from './introContent.types';

const IntroContent = ({ post, className }: IntroContentProps) => {
  return (
    <div
      className={cn(
        'md:absolute w-full md:-translate-y-1/2 md:rounded-2xl md:shadow-lg bg-white',
        className,
      )}
      data-component="IntroContent"
    >
      <PostMetaInfo author={post?.author} date={post?.date} />
      <HeaderContent text={post?.title} level={1} size="h1" className="mb-10" />
      <Paragraph text={post?.description} className="lg:w-1/2" />
    </div>
  );
};

export default IntroContent;
