import PostMetaInfo from './PostMetaInfo';

export default {
  title: 'Typography/Components/Shared/Post/PostMetaInfo',
  component: PostMetaInfo,
};

export const Default = () => <PostMetaInfo author="John Doe" date="2021-01-01" />;
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
