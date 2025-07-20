import { createArgTypesFromArray, getStoryDescription } from '@/utils/storiesHelpers';
import DataBadge from './DataBadge';
import type { DataBadgeProps } from './types';

const customProps = createArgTypesFromArray([
  {
    name: 'date',
    control: 'date',
    type: 'Date | string',
    category: 'Overriding children',
  },
]);

export default {
  title: 'Components/Badge/Extended/DataBadge',
  component: DataBadge,
  parameters: {
    docs: {
      description: {
        component: getStoryDescription({
          inheritFrom: 'Badge',
          source: 'src/components/shared/Badge/DataBadge/DataBadge.tsx',
        }),
      },
    },
  },
  argTypes: customProps,
};

export const Template = (args: DataBadgeProps) => <DataBadge {...args} />;
Template.args = {
  date: new Date(),
};

export const Default = () => <DataBadge date={new Date()} />;
export const WithCustomClassNames = () => (
  <DataBadge date={new Date()} className="bg-red-500 text-white ring-red-500" />
);
