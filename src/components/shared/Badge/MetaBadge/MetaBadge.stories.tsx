import MetaBadge from './MetaBadge';
import type { MetaBadgeProps } from './types';

export default {
  title: 'Components/Badge/Shared/MetaBadge',
  component: MetaBadge,
  argTypes: {
    value: {
      control: 'text',
      description: 'The value to display in the badge.',
    },
    label: {
      control: 'text',
      description: 'The label to display under the value.',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'src/components/shared/Badge/MetaBadge/MetaBadge.tsx',
      },
      toc: true,
    },
  },
};

export const Default = (args: MetaBadgeProps) => <MetaBadge {...args} />;
Default.args = {
  value: '28',
  label: 'Active',
};

export const WithLargeNumber = () => <MetaBadge value="1,234" label="Total Sales" />;

export const WithSmallNumber = () => <MetaBadge value="42" label="New Users" />;

export const WithCustomClassNames = () => (
  <MetaBadge value="1,234" label="Total Sales" className="bg-red-500 text-white ring-red-500" />
);
