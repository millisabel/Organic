import DateDisplay from '@/components/shared/Post/DateDisplay/DateDisplay';
import Badge from './Badge';
import type { BadgeProps } from './types';

export default {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'meta', 'data'],
      description: 'The variant of the badge.',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'src/components/ui/Badge/Badge.tsx',
      },
      toc: true,
    },
  },
};

export const Template = (args: BadgeProps) => <Badge {...args} />;

export const Default = () => <Badge>Badge</Badge>;

export const RoundedXl = () => <Badge size="roundedXl">Badge</Badge>;

export const BadgeWithData = () => (
  <Badge variant="meta" size="roundedXl">
    <DateDisplay date={new Date()} format="short" className="bg-red-500" />
  </Badge>
);
