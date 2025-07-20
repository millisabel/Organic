import PostMetaInfo from '@/components/shared/Post/postMetaInfo';
import { createArgTypesFromArray, getStoryDescription } from '@/utils/storiesHelpers';
import UiList from '.';
import { uiListOptions } from './variants';

const customProps = createArgTypesFromArray([
  {
    name: 'variant',
    control: 'select',
    options: uiListOptions,
  },
]);

export default {
  title: 'Patterns/UiList',
  component: UiList,
  parameters: {
    docs: {
      description: {
        component: getStoryDescription({
          source: 'src/components/patterns/UiList/UiList.stories.tsx',
        }),
      },
    },
  },
  argTypes: customProps,
};

const sampleData = [
  { author: 'John Doe', date: new Date(), format: 'short' as const },
  { author: 'Jane Doe', date: new Date(), format: 'short' as const },
  { author: 'Bob Smith', date: new Date(), format: 'short' as const },
];

export const Template = (arg: React.ComponentProps<typeof UiList>) => <UiList {...arg} />;
Template.args = {
  items: sampleData,
  renderItem: (item: (typeof sampleData)[0], idx: number) => (
    <PostMetaInfo key={idx} author={item.author} date={item.date} format={item.format} />
  ),
};

Template.argTypes = {
  renderItem: {
    control: false,
  },
};
