import List from '.';

export default {
  title: 'Typography/Components/UI/List',
  component: List,
};

const items = ['Item 1', 'Item 2', 'Item 3'];

export const ListDefault = () => <List items={items} />;
export const ListOrdered = () => <List items={items} as="ol" />;
