import Badge from './Badge';
import type { BadgeProps } from './types';
import { badgeVariantOptions } from './variants';

export default {
  title: 'Components/Badge/UI',
  component: Badge,
  argTypes: {
    variant: {
      control: 'select',
      options: badgeVariantOptions,
      description: 'The variant of the badge.',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'components/ui/Badge/Badge.tsx',
      },
      toc: true,
    },
  },
};

export const Default = (args: BadgeProps) => <Badge {...args} />;
Default.args = {
  children: 'Badge',
};

export const VariantMeta = () => <Badge variant="meta">Badge</Badge>;
export const VariantData = () => <Badge variant="data">Badge</Badge>;
