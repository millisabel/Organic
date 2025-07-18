import { Paragraph, Title } from '@/components/ui/Typography';
import { cn } from '@/utils/helpers';
import PostMetaInfo from '../postMetaInfo';
import type { IntroProps } from './types';

const Intro = ({ post, className }: IntroProps) => {
  return (
    <div className={cn('w-full p-20 bg-white', className)} data-component="IntroContent">
      <PostMetaInfo author={post?.author} date={post?.date} className="mb-5" />
      <Title className="mb-5">{post?.title}</Title>
      <Paragraph className="">{post?.description}</Paragraph>
    </div>
  );
};

export default Intro;
