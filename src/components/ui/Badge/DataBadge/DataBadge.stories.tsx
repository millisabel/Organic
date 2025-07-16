import { DataBadge, type DataBadgeProps } from '.';

export default {
  title: 'Badge/Components/UI/DataBadge',
  component: DataBadge,
  argTypes: {
    date: { control: 'date' },
    format: { control: 'select', options: ['short', 'long'] },
  },
};

const Template = (args: DataBadgeProps) => <DataBadge {...args} />;
export const Interactive = Template.bind({});
// @ts-expect-error: Storybook adds args dynamically
Interactive.args = {
  date: new Date(),
  format: 'short',
};

export const DataBadgeDefault = () => {
  return (
    <div className="relative w-28 h-28 bg-gray-200 p-4">
      <DataBadge date={new Date()} />
    </div>
  );
};
export const DataBadgeShort = () => {
  return (
    <div className="relative w-28 h-28 bg-gray-200 p-4">
      <DataBadge date={new Date('2025-06-15')} format="short" />
    </div>
  );
};
export const DataBadgeLong = () => {
  return (
    <div className="relative  h-28 bg-gray-200 p-4">
      <DataBadge date={new Date('15 Jul 2025')} format="long" />
    </div>
  );
};
