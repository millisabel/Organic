import { Paragraph, Title } from '@/components/ui/Typography';
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
      <Title>{post?.title}</Title>
      <Paragraph className="lg:w-1/2">{post?.description}</Paragraph>
    </div>
  );
};

export default IntroContent;
