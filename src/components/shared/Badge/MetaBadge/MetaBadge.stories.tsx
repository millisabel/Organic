import { getStoryDescription } from '@/utils/storiesHelpers';
import MetaBadge from './MetaBadge';
import type { MetaBadgeProps } from './types';

export default {
  title: 'Components/Badge/Extended/MetaBadge',
  component: MetaBadge,
  parameters: {
    docs: {
      description: {
        component: getStoryDescription({
          inheritFrom: 'Badge',
          source: 'src/components/shared/Badge/MetaBadge/MetaBadge.tsx',
        }),
      },
    },
  },
};

export const Template = (args: MetaBadgeProps) => <MetaBadge {...args} />;
Template.args = {
  label: '28',
  description: 'Active',
};

export const Default = () => <MetaBadge label="1,234" description="Total Sales" />;
export const WithCustomClassNames = () => (
  <MetaBadge
    label="1,234"
    description="Total Sales"
    className="bg-red-500 text-white ring-red-500"
  />
);
