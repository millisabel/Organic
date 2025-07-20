import { getStoryDescription } from '@/utils/storiesHelpers';
import PostMetaInfo from './PostMetaInfo';

export default {
  title: 'Shared/Post/PostMetaInfo',
  component: PostMetaInfo,
  parameters: {
    docs: {
      description: {
        component: getStoryDescription({
          source: 'src/components/shared/Post/PostMetaInfo/PostMetaInfo.stories.tsx',
        }),
      },
    },
  },
  argTypes: {
    author: { control: 'text' },
    date: { control: 'date' },
    format: { control: 'select', options: ['short', 'long'] },
    className: { control: 'text' },
  },
};

export const Template = (arg: React.ComponentProps<typeof PostMetaInfo>) => (
  <PostMetaInfo {...arg} />
);
Template.args = {
  author: 'John Doe',
  date: '2021-01-01',
};
export const WithCustomDate = () => (
  <PostMetaInfo author="Jane Smith" date="2021-01-01" format="short" />
);
export const WithCustomClassName = () => (
  <PostMetaInfo author="Jane Smith" date="2021-01-01" format="long" className="text-red-500" />
);
export const OnlyDate = () => <PostMetaInfo date="2021-01-01" format="long" />;
export const OnlyAuthor = () => (
  <PostMetaInfo author="Jane Smith" date="2021-01-01" format="long" />
);
export const WithCustomLabel = () => (
  <PostMetaInfo author="Jane Smith" date="2021-01-01" format="long" />
);
export const WithCustomIcon = () => (
  <PostMetaInfo author="Jane Smith" date="2021-01-01" format="long" />
);
