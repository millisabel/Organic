import DataBadge from './DataBadge';
import type { DataBadgeProps } from './types';

export default {
  title: 'Components/Badge/Shared/DataBadge',
  component: DataBadge,
  parameters: {
    docs: {
      description: {
        component: 'src/components/shared/Badge/DataBadge/DataBadge.tsx',
      },
      toc: true,
    },
  },
  argTypes: {
    date: {
      control: 'date',
      description: 'The date to display in the badge.',
    },
  },
};

export const Template = (args: DataBadgeProps) => <DataBadge {...args} />;
Template.args = {
  date: new Date(),
};

export const Default = () => <DataBadge date={new Date()} />;
export const WithCustomClassNames = () => (
  <DataBadge date={new Date()} className="bg-red-500 text-white ring-red-500" />
);
