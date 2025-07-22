import PostMetaInfo from '@/components/shared/Post/postMetaInfo';
import UiList from '.';
import { getStoryDescription } from '@/utils/storiesHelpers';

export default {
  title: 'Patterns/UiList',
  component: UiList,
  parameters: {
    docs: {
      description: {
        component: getStoryDescription({
          source: 'src/components/patterns/UiList/UiList.tsx',
        }),
      },
    },
  },
};

const simpleData = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
];

const postData = [
  { author: 'John Doe', date: new Date(), format: 'short' as const },
  { author: 'Jane Doe', date: new Date(), format: 'short' as const },
  { author: 'Bob Smith', date: new Date(), format: 'short' as const },
];

export const SimpleDiv = () => (
  <div className="p-4 border rounded">
    <h3>Simple Div Test</h3>
    <p>This should work</p>
  </div>
);

export const SimpleList = () => (
  <ul className="p-4 border rounded">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
);

export const UiListTest = () => (
  <UiList
    items={simpleData}
    renderItem={(item) => (
      <div key={item.id} className="p-2 border rounded">
        {item.name}
      </div>
    )}
  />
);

export const UiListWithVariant = () => (
  <UiList
    items={simpleData}
    renderItem={(item) => (
      <div key={item.id} className="p-2 border rounded">
        {item.name}
      </div>
    )}
    variant="gridColumn_2"
  />
);

export const UiListAsList = () => (
  <UiList
    items={simpleData}
    renderItem={(item) => (
      <div key={item.id} className="p-2 border rounded">
        {item.name}
      </div>
    )}
    as="ul"
    variant="gridColumn_2"
  />
);

export const PostMetaInfoList = () => (
  <UiList
    items={postData}
    renderItem={(item, idx) => (
      <PostMetaInfo key={idx} author={item.author} date={item.date} format={item.format} />
    )}
    as="ul"
    variant="gridColumn_3"
  />
);
