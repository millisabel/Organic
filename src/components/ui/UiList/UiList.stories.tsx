import PostMetaInfo from '@/components/shared/Post/postMetaInfo';
import { getStoryDescription } from '@/utils/storiesHelpers';
import UiList from './UiList';

export default {
  title: 'Ui/UiList',
  component: UiList,
  parameters: {
    docs: {
      description: {
        component: getStoryDescription({
          source: 'src/components/ui/UiList/UiList.stories.tsx',
        }),
      },
    },
  },
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

export const SimpleList = () => (
  <UiList
    items={['Item 1', 'Item 2', 'Item 3']}
    renderItem={(item: string, idx: number) => (
      <div key={idx} className="p-2 border rounded">
        {item}
      </div>
    )}
    as="div"
  />
);

export const UnorderedList = () => (
  <UiList
    items={['First item', 'Second item', 'Third item']}
    renderItem={(item: string, idx: number) => (
      <li key={idx} className="p-1">
        {item}
      </li>
    )}
    as="ul"
    className="list-disc list-inside"
  />
);
